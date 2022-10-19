import { createProject } from '../models/project';
import { displayProject } from '../views/project';

let projects = [];

export const create = (name, tasks) => {
  const newProject = createProject(name);
  tasks.forEach((task) => { newProject.addTask(task) })
  projects.push(newProject);
  displayProject(newProject);
}
