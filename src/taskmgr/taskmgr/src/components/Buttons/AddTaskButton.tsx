import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { AddOrUpdateTaskPopup } from '../AddOrUIpdateTaskPopup/AddTaskPopup';
import { addTask } from '../../data/taskClient';

export const AddTaskButton = () => {
  const [closed, setClosed] = useState(true);

  const add = () => {
    setClosed(false);
  }

  return (
    <>
      <button className="addButton" onClick={add}><VscAdd /></button>
      <AddOrUpdateTaskPopup closed={closed} action={addTask}/>
    </>
  );
}
