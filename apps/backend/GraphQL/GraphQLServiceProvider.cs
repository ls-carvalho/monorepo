namespace Monorepo.Backend.GraphQL;

public static class GraphQLServiceProvider
{
  public static IServiceCollection ConfigureGraphQL(this IServiceCollection services)
  {
    services
      .AddGraphQLServer("product")
      .AddQueryType<ProductQuery>()
      .AddMutationType<ProductMutation>()
      .AddProjections()
      .AddFiltering()
      .AddSorting()
    ;

    return services;
  }
}
