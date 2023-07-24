using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskmgr_be.Models
{
    [Table("SchedulerTask")]
    public class SchedulerTask
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid TaskId { get; set; }

        [MaxLength(30)]
        [Column("Name", TypeName = "nvarchar")]
        public string Name { get; set; }

        [MaxLength(512)]
        [Column("Url", TypeName = "nvarchar")]
        public string Url { get; set; }

        [Column("Minutes", TypeName = "int")]
        public int Minutes { get; set; }
        
        [Column("FirstRun", TypeName = "datetime2")]
        public DateTime FirstRun { get; set; }

        [Column("LastRun", TypeName = "datetime2")]
        public DateTime? LastRun { get; set; }

        [MaxLength(256)]
        [Column("Result", TypeName = "nvarchar")]
        public string Result{ get; set;}
    }
}