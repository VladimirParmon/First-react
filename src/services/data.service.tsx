import { TaskInfo } from "../models/models";
import { fetchAddress, JSONHeader } from "../models/constants";
import { CRUD } from "../models/enums";
import { v4 as uuidv4 } from 'uuid';

export class DataService {
  private static getRandomId(): string {
    return uuidv4();
  }

  public static async fetchTasks(): Promise<TaskInfo[]> {
    const response: Response = await fetch(fetchAddress);
    const data: TaskInfo[] = await response.json();
    return data;
  }

  public static async fetchSingleTask(taskId: string): Promise<TaskInfo> {
    const response: Response = await fetch(fetchAddress + '/' + taskId);
    const data: TaskInfo = await response.json();
    return data;
  }

  public static async addTask(tasks: TaskInfo[], newTaskInfo: Omit<TaskInfo, 'id'>): Promise<TaskInfo[]> {
    const randomId: string = this.getRandomId();
    const newTask = { randomId, ...newTaskInfo }

    const response: Response = await fetch(fetchAddress, {
      method: CRUD.POST,
      headers: JSONHeader,
      body: JSON.stringify({...tasks, ...newTask}),
    })

    const data: TaskInfo[] = await response.json();
    return data;
  }

  public static async deleteTask(tasks: TaskInfo[], taskToDeleteId: string): Promise<TaskInfo[] | null> {
    const response = await fetch((fetchAddress + '/' + taskToDeleteId), {
      method: CRUD.DELETE,
    })

    if(response.status === 200) {
      const data: TaskInfo[] = tasks.filter((task) => task.id !== taskToDeleteId);
      return data;
    } else {
      alert('Was not unable to delete the task!');
      return null;
    }
  }
}