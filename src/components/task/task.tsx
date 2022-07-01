import Icon from '@mui/material/Icon';
import { TaskInfo } from '../../models/models';
import './task.scss';

export function TaskComponent(props: {taskData: TaskInfo, deleteTask: Function, toggleReminder: Function}) {
  return (
    <div className={`task-component ${props.taskData.reminder && 'task-component__checked'}`} 
        onDoubleClick={() => props.toggleReminder(props.taskData.id)}
      >
      <div className="task-component__info">
        <span className="task-component__span task-component__span_title">{props.taskData.text}</span>
        <span className="task-component__span task-component__span_date">{props.taskData.day}</span>
      </div>
      <Icon className='task-component__icon' onClick={() => props.deleteTask(props.taskData.id)}>close</Icon>
    </div>
  )
}