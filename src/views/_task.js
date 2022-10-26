import { destroyTask } from "../controllers/tasks-controller";

const container = document.querySelector('.content');

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
  taskDiv.dataset.taskId = task.id;
    
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = task.name
  taskDiv.appendChild(checkbox);

  const label = document.createElement("label");
  label.for = task.name;
  label.textContent= task.name;
  taskDiv.appendChild(label);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-x"
  deleteIcon.addEventListener("click", () => {
    destroyTask(task);
  })
  taskDiv.appendChild(deleteIcon);

  tasksContainer.appendChild(taskDiv);
};

function removeTask(task) {
  const taskDiv = document.querySelector(`[data-task-id="${task.id}"]`)

  taskDiv.remove();
}

export { addTaskList, appendTask, removeTask }