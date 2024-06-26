using System.ComponentModel.DataAnnotations;

namespace Monorepo.Backend.Context.Entities;

public class Product
{
  [Key]
  public long Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public float Value { get; set; }
}
