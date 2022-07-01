import './taskManager.scss';
import { TaskComponent } from '../task/task';
import { TaskInfo } from '../../models/models';
import { DataService } from '../../services/data.service';
import { AddTaskComponent } from '../addTask/addTask';

export function TaskManager(props: { tasksData: TaskInfo[], setTasks: React.Dispatch<React.SetStateAction<TaskInfo[]>>}) {
  
  async function deleteTask(taskId: string) {
    const response = await DataService.deleteTask(props.tasksData, taskId);
    if(response) props.setTasks(response);
  }
  
  async function toggleReminder(taskId: string) {
    const taskInfo = props.tasksData.find((task) => task.id === taskId);
    if(taskInfo){
      taskInfo.reminder = !taskInfo.reminder
      const response: TaskInfo = await DataService.updateTask(taskInfo);

      if(response) {
        props.setTasks(props.tasksData.map((task) => task.id === taskId ? response : task));
      };
    } 
  }
  return (
    <div className="task-manager">
      <div className="task-manager__header">
        <h2 className="task-manager__heading">Task manager</h2>
        <button className='task-manager__button task-manager__button-heading'>Add</button>
      </div>
      <div className="task-manager__add">
        <AddTaskComponent {...props}/>
      </div>
      <div className='task-manager__tasks'>
        {props.tasksData.map(function(task, i) {
          return <TaskComponent taskData={task} key={i} deleteTask={deleteTask} toggleReminder={toggleReminder}/>;
        })}
      </div>
    </div>
  )
}