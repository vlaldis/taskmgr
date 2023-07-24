using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Util;
using taskmgr_be.Dto;

namespace taskmgr_be
{
    public static class SimpleHttpClient
    {
        public static async Task<StartTaskResponse> StartTask(string url)
        {
            if(string.IsNullOrWhiteSpace(url))
                throw new ArgumentNullException(nameof(url));

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                try
                {
                    var result = await client.GetStringAsync(url);
                    return new StartTaskResponse() { 
                        State = Dto.TaskStatus.Succeeded,
                        Result = result};
                }catch (HttpRequestException ex)
                {
                    return new StartTaskResponse() {
                        State = Dto.TaskStatus.Failed,
                        Result = $"Result: {ex.HResult}, Message: {ex.Message}, Error: {ex}"
                    };
                }
            }
        }
    }
}