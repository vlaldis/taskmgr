import { useEffect, useState } from "react";
import { listTasks } from "../../data/taskClient";
import { Task, Tasks } from "../../interfaces";
import { TaskRow } from "./TasksRow";
import "./TasksTable.css";

export const TasksTable = () => {
    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        async function getTasks() {
            const tasklist = await listTasks();
            if (tasklist)
                setTasks(tasklist.tasks);
        }
        getTasks();
    }, []);

    return (
        // TODO paging is not supported
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Last executed</th>
                <th>Result</th>
                <th>Next run</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {tasks && tasks.map((task, itr) => TaskRow({ task, key: itr }))}
            </tbody>
        </table>
    );
}