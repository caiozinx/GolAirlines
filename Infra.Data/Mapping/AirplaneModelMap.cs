using Gol_Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Data.Mapping
{
    public class AirplaneModelMap : IEntityTypeConfiguration<AirplaneModel>
    {
        public void Configure(EntityTypeBuilder<AirplaneModel> schema)
        {
            schema.ToTable("AirplaneModel");
            schema.HasKey(k => k.Id);
            schema.Property(p => p.Company).IsRequired().HasColumnName("Company");
            schema.Property(p => p.Name).IsRequired().HasColumnName("Name");
            schema.Property(p => p.Role).IsRequired().HasColumnName("Role");
            schema.Property(p => p.CreatedAt).IsRequired().HasColumnName("CreatedAt");
            schema.Property(p => p.UpdatedAt).HasColumnName("UpdatedAt");
        }
    }
}
