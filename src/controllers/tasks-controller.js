import * as task from '../models/task';
import { getTaskName, showTaskFormBtn } from "../views/_task-form";
import { appendTask } from '../views/_task';
import { getProjectFromStorage } from '../models/project';
import { removeTask } from '../views/_task';

function createTask(project) {
  // Collect inputs for new task
  const name = getTaskName();

  // Create new task in local storage
  const newTask = task.create(name, project);
  
  // Add that task to the relevant project
  project.addTask(newTask);
  project.save();

  // Update tasks in project display
  showTaskFormBtn(project);
  appendTask(newTask);
};

function destroyTask(task) {
  // Remove reference to task in local storage
  const project = getProjectFromStorage(task.projectID);
  project.removeTask(task);
  project.save();
  console.log("Deleting task from local storage...")

  // Remove task from display
  removeTask(task);
}

export { createTask, destroyTask }