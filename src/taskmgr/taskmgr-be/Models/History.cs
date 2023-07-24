using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using taskmgr_be.Dto;

namespace taskmgr_be.Models
{
    public class History
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid HistoryId { get; set; }
        
        [Column("RunDate", TypeName = "datetime2")]
        public DateTime RunDate { get; set; }
        public TaskStatus State { get; set; }

        [Column("Description", TypeName = "nvarchar")]
        public string Description { get; set; }

        public Guid TaskId { get; set; }
        public SchedulerTask Task { get; set; }
    }
}