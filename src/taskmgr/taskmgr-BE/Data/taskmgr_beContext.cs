using System.Data.Entity;

namespace taskmgr_be.Data
{
    public class taskmgr_beContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public taskmgr_beContext() : base("name=taskmgr_beContext")
        {
        }

        public System.Data.Entity.DbSet<taskmgr_be.Models.SchedulerTask> SchedullerTask { get; set; }
        public System.Data.Entity.DbSet<taskmgr_be.Models.History> History { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<taskmgr_beContext>(null);
            base.OnModelCreating(modelBuilder);
        }
    }
}
