import './taskManager.scss';
import { TaskComponent } from '../task/task';
import { TaskInfo } from '../../models/models';
import { DataService } from '../../services/data.service';
import { AddTaskComponent } from '../addTask/addTask';
import { GlobalProps } from "../../models/models";

export function TaskManager(props: GlobalProps) {
  
  async function deleteTask(taskId: string): Promise<void> {
    const response = await DataService.deleteTask(props.tasks, taskId);
    if(response) props.setTasks(response);
  }
  
  async function toggleReminder(taskId: string): Promise<void> {
    const taskInfo = props.tasks.find((task) => task.id === taskId);
    if(taskInfo){
      taskInfo.reminder = !taskInfo.reminder
      const response: TaskInfo = await DataService.updateTask(taskInfo);

      if(response) {
        props.setTasks(props.tasks.map((task) => task.id === taskId ? response : task));
      };
    } 
  }

  function toggleAddTaskSection(): void {
    props.setTaskFormsExpanded(!props.isTaskFormsExpanded);
  }

  return (
    <div className="task-manager">
      <div className="task-manager__header">
        <h2 className="task-manager__heading">Task manager</h2>
        <button className='task-manager__button task-manager__button-heading' 
          onClick={() => toggleAddTaskSection()}
        >{props.isTaskFormsExpanded ? 'Close' : 'Add'}
        </button>
      </div>
      <div className={`task-manager__add ${props.isTaskFormsExpanded ? '' : 'hidden'}`}>
        <AddTaskComponent {...props}/>
      </div>
      <div className='task-manager__tasks'>
        {props.tasks.map(function(task, i) {
          return <TaskComponent taskData={task} key={i} deleteTask={deleteTask} toggleReminder={toggleReminder}/>;
        })}
      </div>
    </div>
  )
}