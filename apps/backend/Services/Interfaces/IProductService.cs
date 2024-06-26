using Monorepo.Backend.Context.Entities;
using Monorepo.Backend.DataTransferObject;

namespace Monorepo.Backend.Services.Interfaces;

public interface IProductService
{
  Task<Product> CreateProductAsync(CreateProductDto product);
  Task<Product> UpdateProductAsync(UpdateProductDto product);
  Task<Product> DeleteProductAsync(long id);
}
