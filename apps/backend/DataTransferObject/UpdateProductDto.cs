namespace Monorepo.Backend.DataTransferObject;

public class UpdateProductDto
{
  public long Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public float Value { get; set; }
}
