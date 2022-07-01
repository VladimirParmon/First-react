import { useState } from "react";
import './addTask.scss';
import { DataService } from "../../services/data.service";
import { GlobalProps, TaskInfo } from "../../models/models";

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
    <p className="addTask__p">Task:</p>
    <input className="addTask__input" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} placeholder="Add task"></input>
    
    <p className="addTask__p">Day & time:</p>
    <input className="addTask__input" value={taskDate} onChange={(event) => setTaskDate(event.target.value)} placeholder="Add date & time"></input>
    
    <div className="addTask__reminder">
      <p className="addTask__p">Set reminder:</p>
      <input type="checkbox" checked={taskReminder} onChange={(event) => setTaskReminder(event.target.checked)}/> 
    </div>
    
    <button className="addTask__button" type="submit">Submit</button>
  </form>
  )
}
