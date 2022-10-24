import { index } from '../models/project';

export function updateSidebar() {
  const projects = index();
  const sidebar = document.querySelector(".projects");

  projects.forEach((project) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = project.name;

    sidebar.appendChild(link);
  });
};

updateSidebar();