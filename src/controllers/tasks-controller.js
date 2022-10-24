import * as task from '../models/task';
import { getTaskName } from "../views/task-form";

export function createTask(project) {
  // Collect inputs for new task
  const name = getTaskName();

  // Create new task in local storage
  const newTask = task.create(name, project.id);
  
  // Add that task to the relevant project
  project.addTask(newTask);
  project.save();
};