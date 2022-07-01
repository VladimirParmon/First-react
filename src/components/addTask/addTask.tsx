import { useState } from "react";
import './addTask.scss';
import { DataService } from "../../services/data.service";
import { GlobalProps, TaskInfo } from "../../models/models";
import { Button, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

export function AddTaskComponent(props: GlobalProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskReminder, setTaskReminder] = useState(false);

  async function submitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: Omit<TaskInfo, 'id'> = {
      text: taskTitle,
      day: taskDate,
      reminder: taskReminder
    }
    const response = await DataService.addTask(props.tasks, newTask);
    props.setTasks(response);

    setTaskTitle('');
    setTaskDate('');
    setTaskReminder(false);
  }

  return (
  <form className="addTask" onSubmit={(e) => submitTask(e)}>
    <div className="addTask__inputs">
      <TextField className="addTask__input" label="Add task" variant="standard" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)}/>
      <TextField className="addTask__input" label="Add date & time" variant="standard" value={taskDate} onChange={(event) => setTaskDate(event.target.value)}/>
    </div>

    <div className="addTask__reminder">
      <p className="addTask__p">Set reminder:</p>
      <Checkbox checked={taskReminder} onChange={(event) => setTaskReminder(event.target.checked)}/>
    </div>
    
    <Button className="addTask__button" type="submit" color='primary' variant="outlined">Submit</Button>
  </form>
  )
}
