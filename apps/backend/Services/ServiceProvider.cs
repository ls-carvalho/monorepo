using Monorepo.Backend.Services.Interfaces;

namespace Monorepo.Backend.Services;

public static class ServiceProvider
{
  public static IServiceCollection AddServices(this IServiceCollection services)
  {
    return services
      .AddScoped<IProductService, ProductService>();
  }
}
