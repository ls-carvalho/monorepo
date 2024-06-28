using Monorepo.Backend.Context;
using Monorepo.Backend.Services;
using Monorepo.Backend.GraphQL;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddServices();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddContext(builder.Configuration);
builder.Services.AddSwaggerGen();
builder.Services.ConfigureGraphQL();
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowLocal",
    policy => policy
      .AllowAnyHeader()
      .AllowAnyMethod()
      .AllowCredentials()
      .SetIsOriginAllowed(url => true)
    );
});

var app = builder.Build();

app.UseCors("AllowLocal");
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.MapGraphQL("/graphql/products", "product");
app.RunMigrations();

await app.RunAsync();
