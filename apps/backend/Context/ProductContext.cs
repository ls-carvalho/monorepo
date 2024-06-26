
using Microsoft.EntityFrameworkCore;
using Monorepo.Backend.Context.Entities;

namespace Monorepo.Backend.Context;

public class ProductContext : DbContext
{
  public ProductContext() { }
  public ProductContext(DbContextOptions options) : base(options) { }

  public DbSet<Product> Products { get; set; }
}
