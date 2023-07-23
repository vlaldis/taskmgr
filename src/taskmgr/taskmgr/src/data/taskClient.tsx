export class TaskClient {
    constructor() {
    }

    listTasks() {
        return [{ name: "string", url: "string", lastRun: "string", result: "string", nextRun: "string" }]
    }
}

const config = {
    allTasks: "http://localhost:1234/api/task/all"
}

export const listTasks = async () => fetch(config.allTasks, {
        credentials: "omit",
    }).catch( (error) => alert("Can not fetch data from backend:" + structuredClone(error)));