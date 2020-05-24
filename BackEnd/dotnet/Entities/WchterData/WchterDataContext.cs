using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using Microsoft.Extensions.Configuration;

namespace Wchter.Entities.WchterData
{
    public partial class WchterDataContext : DbContext
    {
        protected readonly IConfiguration _configuration;
        public WchterDataContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public WchterDataContext(DbContextOptions<WchterDataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Career> Career { get; set; }
        public virtual DbSet<Classroom> Classroom { get; set; }
        public virtual DbSet<Device> Device { get; set; }
        public virtual DbSet<Faculty> Faculty { get; set; }
        public virtual DbSet<RCareerSubject> RCareerSubject { get; set; }
        public virtual DbSet<RTeacherSubject> RTeacherSubject { get; set; }
        public virtual DbSet<RUserUserType> RUserUserType { get; set; }
        public virtual DbSet<SemesterLog> SemesterLog { get; set; }
        public virtual DbSet<Subject> Subject { get; set; }
        public virtual DbSet<Tag> Tag { get; set; }
        public virtual DbSet<UserType> UserType { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_configuration.GetConnectionString("WchterData"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Career>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("Career_NameUk")
                    .IsUnique();

                entity.Property(e => e.CareerId).HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Faculty)
                    .WithMany(p => p.Career)
                    .HasForeignKey(d => d.FacultyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Career_FacultyIdFk");
            });

            modelBuilder.Entity<Classroom>(entity =>
            {
                entity.Property(e => e.Block)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.Room)
                    .IsRequired()
                    .HasMaxLength(3);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<Device>(entity =>
            {
                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Classroom)
                    .WithMany(p => p.Device)
                    .HasForeignKey(d => d.ClassroomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Device_ClassroomIdFk");
            });

            modelBuilder.Entity<Faculty>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("Faculty_NameUk")
                    .IsUnique();

                entity.Property(e => e.FacultyId).ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<RCareerSubject>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("R_CareerSubject");

                entity.Property(e => e.CareerId)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.SubjectId)
                    .IsRequired()
                    .HasMaxLength(7);

                entity.HasOne(d => d.Career)
                    .WithMany()
                    .HasForeignKey(d => d.CareerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("R_CareerSubject_CareerIdFk");

                entity.HasOne(d => d.Subject)
                    .WithMany()
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("R_CareerSubject_SubjectIdFk");
            });

            modelBuilder.Entity<RTeacherSubject>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("R_TeacherSubject");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.SubjectId)
                    .IsRequired()
                    .HasMaxLength(7);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.Semester)
                    .WithMany()
                    .HasForeignKey(d => d.SemesterId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("R_TeacherSubject_SemesterIdFk");

                entity.HasOne(d => d.Subject)
                    .WithMany()
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("R_TeacherSubject_SubjectIdFk");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("R_TeacherSubject_UserDataIdFk");
            });

            modelBuilder.Entity<RUserUserType>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("UserDataPk");

                entity.ToTable("R_UserUserType");

                entity.Property(e => e.UserId).HasMaxLength(10);

                entity.HasOne(d => d.UserType)
                    .WithMany(p => p.RUserUserType)
                    .HasForeignKey(d => d.UserTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("UserData_UserTypeIdFk");
            });

            modelBuilder.Entity<SemesterLog>(entity =>
            {
                entity.HasKey(e => e.SemesterId)
                    .HasName("SemesterLogPk");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.Property(e => e.SubjectId).HasMaxLength(7);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Tag1)
                    .IsRequired()
                    .HasColumnName("Tag")
                    .HasMaxLength(45);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tag)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Tag_UserDataIdFk");
            });

            modelBuilder.Entity<UserType>(entity =>
            {
                entity.HasIndex(e => e.Description)
                    .HasName("UserType_DescriptionUk")
                    .IsUnique();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
