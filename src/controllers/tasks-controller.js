import * as task from '../models/task';
import { getTaskName } from "../views/task-form";
import { getCurrentProject } from "../views/content";

export function createTask() {
  // Collect inputs for new task
  const name = getTaskName();
  let project = getCurrentProject();

  // Create new task in local storage
  const newTask = task.create(name, project.id);
  
  // Add that task to the relevant project
  project.addTask(newTask);
}