import { createProject } from '../models/project';
import { displayProject } from '../views/project';
import { loadNewButtons } from '../views/project';

let projects = [];

export const create = (event) => {
  event.preventDefault();

  const projectForm = event.target.parentElement;
  const projectName = projectForm.querySelector("input").value;
  const newProject = createProject(projectName);

  projects.push(newProject);
  displayProject(newProject);
  loadNewButtons();
}
