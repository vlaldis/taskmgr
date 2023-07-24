using System.Web.Http;
using taskmgr_be.Filters;

namespace taskmgr_be
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            GlobalConfiguration.Configuration.Filters.Add(new GlobalExceptionFilter());

            // Web API configuration and services
            config.Routes.MapHttpRoute(
                name: "swagger",
                routeTemplate: "",
                defaults: null,
                constraints: null,
                handler: new Swashbuckle.Application.RedirectHandler((message => message.RequestUri.ToString()), "swagger"));
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
