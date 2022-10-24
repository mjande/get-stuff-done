import { showTaskFormBtn } from '../views/task-form';

const container = document.querySelector('.content');

function showProject(project) {  
  container.innerHTML = "";
  
  // Create header
  const header = document.createElement("h2");
  header.textContent = project.name;
  container.appendChild(header);

  // Add task list
  addTaskList(project);

  // Create "Add Task" button
  const newTaskDiv = document.createElement("div");
  newTaskDiv.className = "new-task";
  container.appendChild(newTaskDiv);

  showTaskFormBtn(project);

  console.log(`Showing project (ID: ${project.id}) on home page`);
};

function addTaskList(project) {
  const tasksHeader = document.createElement("h3");
  tasksHeader.textContent = "Tasks";
  container.appendChild(tasksHeader);

  const tasksContainer = document.createElement("div");
  tasksContainer.className = "tasks";
  container.appendChild(tasksContainer);

  project.tasks.forEach((task) => {
    appendTask(task);
  });
};

function appendTask(task) {
  const tasksContainer = document.querySelector(".tasks");
  
  const taskDiv = document.createElement("div");
    
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = task.title
  taskDiv.appendChild(checkbox);

  const label = document.createElement("label");
  label.for = task.title;
  label.textContent= task.title;
  taskDiv.appendChild(label);

  tasksContainer.appendChild(taskDiv);
};

export { showProject, appendTask };