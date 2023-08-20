using System;
using backend.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Map
{
    public class ReminderMap : IEntityTypeConfiguration<ReminderModel>
    {
        void IEntityTypeConfiguration<ReminderModel>.Configure(EntityTypeBuilder<ReminderModel> builder)
        {
           builder.HasKey(x => x.id);
           builder.Property(x =>x.name).IsRequired().HasMaxLength(255);
           builder.Property(x =>x.date).IsRequired().HasMaxLength(255);
        }
    }
}




