import { showTaskFormBtn } from '../views/_task-form';
import { addTaskList } from './_task';

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

export { showProject };