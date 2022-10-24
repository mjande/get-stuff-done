import * as project from '../models/project';
import { addToSidebar } from '../views/sidebar';
import { getProjectName } from '../views/project-form';
import { toggleProjectForm } from '../views/project-form';
import { showProject } from '../views/content';

export function createProject() {
  const name = getProjectName();
  
  // Create project in local storage
  const newProject = project.create(name);

  showProject(newProject);
  addToSidebar(newProject);
  toggleProjectForm();
}