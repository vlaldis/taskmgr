import { TaskRow } from "./TasksRow";

export const TasksTable = () => {
    // TODO paging is not supported
    const taskClient = new TaskClient();
    const tasks = taskClient.listTasks();
  
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Last executed</th>
          <th>Result</th>
          <th>Next run</th>
          <th></th>
        </tr>
        {tasks.map((task, itr) => TaskRow({ task, key: itr }))}
      </table>
    );
  }