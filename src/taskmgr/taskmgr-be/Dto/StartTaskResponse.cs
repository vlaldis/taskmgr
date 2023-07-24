using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace taskmgr_be.Dto
{
    public class StartTaskResponse
    {
        public TaskStatus State { get; set; }
        public string Result { get; set; }
    }
}