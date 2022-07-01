import { GlobalProps } from "../models/models"
import { TaskManager } from "../components/taskManager/taskManager"

export function HomePage(props: GlobalProps) {
  return (
    <div className="centerContainer">
      <TaskManager {...props}/>
    </div>
  )
}