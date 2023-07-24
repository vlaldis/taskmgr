using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using taskmgr_be.Data;
using taskmgr_be.Models;

namespace taskmgr_be.Controllers
{
    public class TasksController : ApiController
    {
        private taskmgr_beContext db = new taskmgr_beContext();


        // [Authorize]
        // GET: api/Tasks
        public IQueryable<SchedulerTask> GetTasks()
        {
            return db.Tasks;
        }

        // GET: api/Tasks/<guid>
        [ResponseType(typeof(SchedulerTask))]
        public async Task<IHttpActionResult> GetTask(Guid id)
        {
            var task = await db.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // PUT: api/Tasks/<guid>
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTask(Guid id, SchedulerTask task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != task.TaskId)
            {
                return BadRequest();
            }

            db.Entry(task).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await TaskExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Tasks/<guid>/start
        [ResponseType(typeof(SchedulerTask))]
        [Route("{id}/start")]
        public async Task<IHttpActionResult> PostTaskStart(Guid id)
        {
            var task = await db.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            var executionResult = await SimpleHttpClient.StartTask(task.Url);
            var history = new History()
            {
                Description = executionResult.Result,
                RunDate = DateTime.UtcNow,
                State = executionResult.State,
                TaskId = task.TaskId
            };
            db.History.Add(history);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                //logg or whatever
                throw;
            }
            return Ok();
        }

        // POST: api/Tasks
        [ResponseType(typeof(SchedulerTask))]
        public async Task<IHttpActionResult> PostTask(SchedulerTask task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tasks.Add(task);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (await TaskExistsAsync(task.TaskId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = task.TaskId }, task);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private async Task<bool> TaskExistsAsync(Guid id)
        {
            return await db.Tasks.CountAsync(e => e.TaskId == id) > 0;
        }
    }
}