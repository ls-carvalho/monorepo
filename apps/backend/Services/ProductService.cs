using Microsoft.EntityFrameworkCore;
using Monorepo.Backend.Context;
using Monorepo.Backend.Context.Entities;
using Monorepo.Backend.DataTransferObject;
using Monorepo.Backend.Services.Interfaces;

namespace Monorepo.Backend.Services;
public class ProductService : IProductService
{
  private readonly ProductContext _productContext;

  public ProductService(ProductContext productContext)
  {
    _productContext = productContext;
  }

  public async Task<Product> CreateProductAsync(CreateProductDto product)
  {
    var newProduct = new Product
    {
      Name = product.Name,
      Value = product.Value,
    };

    await _productContext.Products.AddAsync(newProduct);
    await _productContext.SaveChangesAsync();

    return newProduct;
  }

  public async Task<Product> DeleteProductAsync(long id)
  {
    var entity = await _productContext.Products.FirstOrDefaultAsync(p => p.Id == id);
    if (entity is null)
    {
      throw new ArgumentException("Product does not exist.");
    }

    await Task.Run(() => _productContext.Products.Remove(entity));
    await _productContext.SaveChangesAsync();

    return entity;
  }

  public async Task<Product> UpdateProductAsync(UpdateProductDto product)
  {
    var entity = await _productContext.Products.FirstOrDefaultAsync(p => p.Id == product.Id);
    if (entity is null)
    {
      throw new ArgumentException("Product does not exist.");
    }

    entity.Name = product.Name;
    entity.Value = product.Value;

    await _productContext.SaveChangesAsync();

    return entity;
  }
}
