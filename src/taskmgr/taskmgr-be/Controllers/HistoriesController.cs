using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using taskmgr_be.Data;
using taskmgr_be.Models;

namespace taskmgr_be.Controllers
{
    public class HistoriesController : ApiController
    {
        private taskmgr_beContext db = new taskmgr_beContext();

        // GET: api/Histories/task/<taskGuid>
        [ResponseType(typeof(History))]
        [Route("task/{taskId}")]
        public async Task<IHttpActionResult> GetHistories(Guid taskId)
        {
            var history = await db.History.Where(_ => _.TaskId == taskId)
                ?.OrderByDescending(_ => _.RunDate)?.Take(10).ToListAsync();

            if (history is null)
                return NotFound();

            return Ok(history);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}