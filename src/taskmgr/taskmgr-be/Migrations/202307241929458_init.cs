namespace taskmgr_be.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Histories",
                c => new
                    {
                        HistoryId = c.Guid(nullable: false, identity: true),
                        RunDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        State = c.Int(nullable: false),
                        Description = c.String(maxLength: 4000),
                        TaskId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.HistoryId)
                .ForeignKey("dbo.SchedulerTask", t => t.TaskId, cascadeDelete: true)
                .Index(t => t.TaskId);
            
            CreateTable(
                "dbo.SchedulerTask",
                c => new
                    {
                        TaskId = c.Guid(nullable: false, identity: true),
                        Name = c.String(maxLength: 30),
                        Url = c.String(maxLength: 512),
                        Minutes = c.Int(nullable: false),
                        FirstRun = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        LastRun = c.DateTime(precision: 7, storeType: "datetime2"),
                        Result = c.String(maxLength: 256),
                    })
                .PrimaryKey(t => t.TaskId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Histories", "TaskId", "dbo.SchedulerTask");
            DropIndex("dbo.Histories", new[] { "TaskId" });
            DropTable("dbo.SchedulerTask");
            DropTable("dbo.Histories");
        }
    }
}
