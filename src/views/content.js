import { showTaskForm } from '../views/task-form';

const container = document.querySelector('.content');
let currentProject;

function showProject(project) {  
  container.innerHTML = "";
  currentProject = project;
  
  // Create header
  const header = document.createElement("h2");
  header.textContent = project.name;
  container.appendChild(header);

  

  // Create "Add Task" button
  const newTaskDiv = document.createElement("div");
  newTaskDiv.className = "new-task";

  const taskBtn = document.createElement("button");
  taskBtn.textContent = "New Task";
  taskBtn.addEventListener("click", showTaskForm);
  newTaskDiv.appendChild(taskBtn);
  container.appendChild(newTaskDiv);

  console.log(`Showing project (ID: ${project.id}) on home page`);
};

function getCurrentProject() {
  return currentProject;
}

export { showProject, getCurrentProject };