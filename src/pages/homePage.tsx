import { TaskManager } from "../components/taskManager/taskManager"
import { TaskInfo } from "../models/models"

export function HomePage(props: {tasksData: TaskInfo[], setTasks: React.Dispatch<React.SetStateAction<TaskInfo[]>>}) {
  return (
    <div className="centerContainer">
      <TaskManager {...props}/>
    </div>
  )
}