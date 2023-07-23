import { VscAdd } from 'react-icons/vsc';

export const AddTaskButton = () => {
  const add = () => alert("add");
  return (
    <button className="addButton" onClick={add}><VscAdd /></button>
  );
}