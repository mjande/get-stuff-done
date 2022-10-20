// Import functions
import { displayNewProjectForm } from "../views/project-form";

function loadNewButtons() {
  const container = document.querySelector(".new-project");
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons";
  container.firstChild.replaceWith(buttonsContainer);

  // loadNewTaskButton();
  loadNewProjectButton();
};

/* 
const loadNewTaskButton = () => {
  const plusSign = document.createElement("i");
  plusSign.className = "fa-solid fa-plus";

  const newTaskBtn = document.createElement("button");
  newTaskBtn.type = "button";
  newTaskBtn.className = "new-task-button";
  newTaskBtn.appendChild(plusSign);
  newTaskBtn.textContent = "New Task";

  const buttonsContainer = document.querySelector(".buttons");
  buttonsContainer.appendChild(newTaskBtn);
}
*/

const loadNewProjectButton = () => {
  const plusSign = document.createElement("i");
  plusSign.className = "fa-solid fa-plus";
  
  const newProjectBtn = document.createElement("button");
  newProjectBtn.type = "button";
  newProjectBtn.className = "new-project-button";
  newProjectBtn.appendChild(plusSign);
  newProjectBtn.textContent = "New Project";

  newProjectBtn.addEventListener("click", displayNewProjectForm);

  const buttonsContainer = document.querySelector(".buttons");
  buttonsContainer.appendChild(newProjectBtn);
};


// Add a single project to the view
const displayProject = (project) => {
  const projectsContainer = document.querySelector('.projects');

  const newProject = document.createElement("div");
  newProject.className = "project";
  
  const newProjectHeader = document.createElement("h3");
  newProjectHeader.textContent = project.name;
  newProject.appendChild(newProjectHeader);

  project.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = task.title + "Id"
    const label = document.createElement("label");
    label.for = task.title + "Id"
    label.textContent = task.title

    taskDiv.appendChild(input);
    taskDiv.appendChild(label);

    newProject.appendChild(taskDiv);
  })

  projectsContainer.appendChild(newProject);
}

// Initialization
loadNewButtons();

// Export functions to index.js
export { displayProject, loadNewButtons };

