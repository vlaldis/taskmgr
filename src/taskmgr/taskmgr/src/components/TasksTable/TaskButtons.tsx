import { IconType } from 'react-icons';
import { VscDebugStart, VscEdit, VscHistory } from 'react-icons/vsc';
import {Task} from "../../interfaces";

interface TaskButtonsProps { task: Task };

export const TaskButtons = ({ task }: TaskButtonsProps) => {
  const edit = () => alert("edit");
  const run = () => alert("run");
  const history = () => alert("history");

  interface ActionButtonProps { Btn: IconType, action: (params: any) => any };
  const ActionButton = ({ Btn, action }: ActionButtonProps) => <button onClick={action}>{<Btn />}</button>;

  return (
    <>
      <ActionButton Btn={VscDebugStart} action={run} />
      <ActionButton Btn={VscEdit} action={edit} />
      <ActionButton Btn={VscHistory} action={history} />
    </>
  );
}