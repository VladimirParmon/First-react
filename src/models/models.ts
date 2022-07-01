export interface TaskInfo {
  id: string;
  text: string;
  day: string;
  reminder: boolean;
}

export interface GlobalProps {
  isAddTaskButtonShown: boolean;
  setShowAddTaskButton: React.Dispatch<React.SetStateAction<boolean>>;
  isTaskFormsExpanded: boolean;
  setTaskFormsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: TaskInfo[];
  setTasks: React.Dispatch<React.SetStateAction<TaskInfo[]>>;
}
