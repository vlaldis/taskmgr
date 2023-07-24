import { Task, TaskRequest, Tasks } from "../interfaces";

//this can be json or from environment, lets not waste time and keep it there
const config = {
    tasks: "http://localhost:12345/api/tasks"
}

// lets not care about authentication for simplicity, but it shold be there
export const listTasks: () => Promise<void | Tasks> = async () =>
    fetch(config.tasks, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET",
        // body: JSON.stringify(userInfoParams),
        credentials: "omit",
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text: string) => { throw new Error(text) })
            }
            return response.json()
        })
        // this should not be seen by user, we can log and then redirect to errorpage or so
        .catch((error) => alert("Can not load tasks: " + error.text));


export const startTask: (taskId: string) => Promise<void> = async (taskId: string) =>
    fetch(`${config.tasks}/${taskId}/start` , {
        method: "POST",
        credentials: "omit",
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text: string) => { throw new Error(text) })
            }
        })
        // this should not be seen by user, we can log and then redirect to errorpage or so
        .catch((error) => alert("Can not start task: " + error.text));

export const addTask: (task: TaskRequest) => Promise<void> = async (task: TaskRequest) =>
    fetch(config.tasks, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(task),
        credentials: "omit",
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text: string) => { throw new Error(text) })
            }
        })
        // this should not be seen by user, we can log and then redirect to errorpage or so
        .catch((error) => alert("Can not ad task: " + error.text));
