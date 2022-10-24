import * as task from '../models/task';
import { getTaskName, showTaskFormBtn } from "../views/task-form";
import { appendTask } from '../views/content';

export function createTask(project) {
  // Collect inputs for new task
  const name = getTaskName();

  // Create new task in local storage
  const newTask = task.create(name, project.id);
  
  // Add that task to the relevant project
  project.addTask(newTask);
  project.save();

  // Update tasks in project display
  showTaskFormBtn(project);
  appendTask(newTask);
};