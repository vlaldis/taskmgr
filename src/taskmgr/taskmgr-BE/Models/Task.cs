using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace taskmgr_be.Models
{
    public class Task
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Minutes { get; set; }
        public DateTime FirstRun { get; set; }
        public DateTime? LastRun { get; set; }
        public string Result{ get; set;}

    }
}