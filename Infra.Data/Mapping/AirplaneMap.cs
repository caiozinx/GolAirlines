using Gol_Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.Mapping
{
    public class AirplaneMap : IEntityTypeConfiguration<Airplane>
    {
        public void Configure(EntityTypeBuilder<Airplane> schema)
        {
            schema.ToTable("Airplane");
            schema.HasKey(k => k.Id);
            schema.Property(p => p.Code).IsRequired().HasColumnName("Code");            
            schema.Property(p => p.NumberOfPassengers).IsRequired().HasColumnName("NumberOfPassengers");
            schema.Property(p => p.CreatedAt).IsRequired().HasColumnName("CreatedAt");
            schema.Property(p => p.UpdatedAt).HasColumnName("UpdatedAt").HasDefaultValue();
            schema.HasOne(ho => ho.AirplaneModel).WithMany().HasForeignKey("AirplaneModelId");
        }
    }
}
