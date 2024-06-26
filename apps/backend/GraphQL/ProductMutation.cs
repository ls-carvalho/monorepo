using Monorepo.Backend.Context.Entities;
using Monorepo.Backend.DataTransferObject;
using Monorepo.Backend.Services.Interfaces;

namespace Monorepo.Backend.GraphQL;

public class ProductMutation
{
  [GraphQLName("createProduct")]
  [UseProjection]
  public async Task<Product> CreateProductAsync(CreateProductDto product, [Service] IProductService productService) => await productService.CreateProductAsync(product);

  [GraphQLName("updateProduct")]
  [UseProjection]
  public async Task<Product> UpdateProductAsync(UpdateProductDto product, [Service] IProductService productService) => await productService.UpdateProductAsync(product);

  [GraphQLName("deleteProduct")]
  [UseProjection]
  public async Task<Product> DeleteProductAsync(long id, [Service] IProductService productService) => await productService.DeleteProductAsync(id);

}
