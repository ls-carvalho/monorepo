using Monorepo.Backend.Context;
using Monorepo.Backend.Context.Entities;

namespace Monorepo.Backend.GraphQL;

public class ProductQuery
{
  [GraphQLName("readProduct")]
  [UseOffsetPaging(IncludeTotalCount = true, MaxPageSize = 100)]
  [UseProjection]
  [UseFiltering]
  [UseSorting]
  public IQueryable<Product> GetProduct([Service] ProductContext productContext) => productContext.Products;
}
