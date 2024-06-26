using Monorepo.Backend.Context.Entities;
using Monorepo.Backend.DataTransferObject;
using Monorepo.Backend.Services.Interfaces;

namespace Monorepo.Backend.Services;
public class ProductService : IProductService
{
  public Task<Product> CreateProductAsync(CreateProductDto product)
  {
    throw new NotImplementedException();
  }

  public Task<Product> DeleteProductAsync(long id)
  {
    throw new NotImplementedException();
  }

  public Task<Product> UpdateProductAsync(UpdateProductDto product)
  {
    throw new NotImplementedException();
  }
}
