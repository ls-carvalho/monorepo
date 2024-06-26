using Microsoft.EntityFrameworkCore;

namespace Monorepo.Backend.Context;

public static class ContextProvider
{
  public static IServiceCollection AddContext(this IServiceCollection services, IConfiguration configuration)
  {
    return services.AddDbContext<ProductContext>(options =>
    {
      var connectionString = configuration.GetConnectionString("DefaultConnection");
      if (connectionString != "InMemoryDatabase")
      {
        options.UseSqlServer(connectionString);
      }
      else
      {
        options.UseInMemoryDatabase("InMemoryDatabase");
      }
    });
  }

  public static void RunMigrations(this WebApplication app)
  {
    using var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<ProductContext>();
    if (context.Database.ProviderName != "Microsoft.EntityFrameworkCore.InMemory")
      context.Database.Migrate();
  }
}

