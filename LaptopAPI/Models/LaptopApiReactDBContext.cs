using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace LaptopAPI.Models
{
    public partial class LaptopApiReactDBContext : DbContext
    {
        public LaptopApiReactDBContext()
        {
        }

        public LaptopApiReactDBContext(DbContextOptions<LaptopApiReactDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Laptop> Laptops { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-GK7JKUO; Database=LaptopApiReactDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Laptop>(entity =>
            {
                entity.ToTable("Laptop");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ImgUrl)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("imgUrl");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Supplier)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("supplier");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
