import { useState } from 'react';
import { TaskRequest } from '../../interfaces';
import { Popup } from '../Popup/Popup';
import "./AddTaskPopup.css";

interface AddOrUpdateTaskPopupProps { closed: boolean, action: (request: TaskRequest) => Promise<void> };

const DEFAULT_INTERVAL = 10 // minutes

export const AddOrUpdateTaskPopup = (props: AddOrUpdateTaskPopupProps) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [minutes, setMinutes] = useState<number>(DEFAULT_INTERVAL);
  const [firstRun, setFirstRun] = useState('');

  const addNewTask = async () => {
    const taskRequest = {
      "name": name,
      "url": url,
      "minutes": minutes,
      "firstRun": firstRun,
    }
    await props.action(taskRequest);
  }

  return (
    <Popup title='Add Task' buttonText='Save' closePopup={() => addNewTask()} closed={props.closed}>
      <table>
        <tr>
          <td><label htmlFor="in-name">Name</label></td>
          <td><input id="in-name" type={'text'} value={name} onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label htmlFor="in-name">URL</label></td>
          <td><input id="in-url" type={'text'} value={url} onChange={(e) => setUrl(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label htmlFor="in-minutes">Name</label></td>
          <td><input id="in-minutes" type={'number'} value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value) ?? DEFAULT_INTERVAL)} /></td>
        </tr>
        <tr>
          <td><label htmlFor="in-firstRun">Name</label></td>
          <td><input id="in-firstRun" type={'datetime-local'} value={firstRun} onChange={(e) => setFirstRun(e.target.value)} /></td>
        </tr>
      </table>
    </Popup >
  );
}