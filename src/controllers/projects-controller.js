import * as project from '../models/project';
import { addToSidebar } from '../views/sidebar';
import { getProjectName } from '../views/project-form';
import { toggleProjectForm } from '../views/project-form';

export function createProject() {
  const name = getProjectName();
  
  // Create project in local storage
  const newProject = project.create(name);

  // Update main display;
  addToSidebar(newProject);
  toggleProjectForm();
}