import * as project from '../models/project';
import { updateSidebar } from '../views/sidebar';
import { getProjectName } from '../views/project-form';
import { toggleModal } from '../views/project-form';

export function createProject() {
  const name = getProjectName();
  
  // Create project in local storage
  project.create(name);

  // Update main display;
  // updateSidebar();
  toggleProjectForm();
}