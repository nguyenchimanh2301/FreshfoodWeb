﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class APIEntities : DbContext
    {
        public APIEntities()
            : base("name=APIEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<bill_detail_ban> bill_detail_ban { get; set; }
        public virtual DbSet<bill_detail_nhap> bill_detail_nhap { get; set; }
        public virtual DbSet<bills_ban> bills_ban { get; set; }
        public virtual DbSet<bills_nhap> bills_nhap { get; set; }
        public virtual DbSet<khach_hang> khach_hang { get; set; }
        public virtual DbSet<loai_sp> loai_sp { get; set; }
        public virtual DbSet<san_pham> san_pham { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<user> users { get; set; }
        public virtual DbSet<news> news { get; set; }
        public virtual DbSet<nha_cung_cap> nha_cung_cap { get; set; }
    }
}