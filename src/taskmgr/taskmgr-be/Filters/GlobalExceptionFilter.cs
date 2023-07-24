using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net;
using System.Web;
using System.Web.Http.Filters;

namespace taskmgr_be.Filters
{

    // this is to demonstrate that users should not get our exceptions with stacktrace
    // there can be more filters added for specific behaviors
    public class GlobalExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is Exception)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError);
                //logg somewhere
            }
        }
    }
}