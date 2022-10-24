import { projectLink } from './project';
import * as project from '../../models/project';

export function updateSidebar() {
  const sidebar = document.querySelector(".projects");
  sidebar.innerHTML = "";

  const projects = project.all();

  console.log(projects);
  
  projects.forEach((project) => {
    sidebar.appendChild(projectLink(project));
  });

  // return 
};

