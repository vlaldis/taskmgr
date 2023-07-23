import { Task, TaskRequest, Tasks } from "../interfaces";

//this can be json or from environment, lets not waste time and keep it there
const config = {
    allTasks: "http://localhost:1234/api/task/all",
    addTask: "http://localhost:1234/api/task",
    startTask: "http://localhost:1234/api/task/start/"
}

// lets not care about authentication for simplicity, but it shold be there
export const listTasks: () => Promise<void | Tasks> = async () =>
    fetch(config.allTasks, {
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
    fetch(config.startTask + taskId, {
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
    fetch(config.addTask, {
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
