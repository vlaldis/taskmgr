import { Task } from "../../interfaces";
import { TaskButtons } from "./TaskButtons";

interface TaskRowProps { key: number, task: Task }
export const TaskRow = ({ task, key }: TaskRowProps) => {
  return (
    <tr key={key}>
      <td>{task.name}</td>
      <td>{task.url}</td>
      <td>{task.lastRun}</td>
      <td>{task.result}</td>
      <td>{task.nextRun}</td>
      <td><TaskButtons task={task} /></td>
    </tr>
  );
}