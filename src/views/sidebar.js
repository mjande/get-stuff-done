import { index } from '../models/project';

const sidebar = document.querySelector(".projects");

function updateSidebar() {
  const projects = index();

  projects.forEach((project) => {
    addToSidebar(project);
  });
};

function addToSidebar(project) {
  console.log(`Adding project (ID: ${project.id}) to sidebar...`)
  
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;

  sidebar.appendChild(link);
};

updateSidebar();

export { updateSidebar, addToSidebar }