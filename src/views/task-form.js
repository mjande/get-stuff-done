import { createTask } from "../controllers/tasks-controller";

function showTaskFormBtn(project) {
  const newTaskDiv = document.querySelector(".new-task");
  newTaskDiv.innerHTML = "";

  const taskBtn = document.createElement("button");
  taskBtn.type = "button";
  taskBtn.textContent = "New Task";
  taskBtn.addEventListener("click", () => {
  showTaskForm(project); 
  });
  newTaskDiv.appendChild(taskBtn);
};

function showTaskForm(project) {
  const newTaskDiv = document.querySelector(".new-task");
  newTaskDiv.innerHTML = "";

  const form = document.createElement("form");
  newTaskDiv.appendChild(form);

  const controlDiv = document.createElement("div");
  controlDiv.className = "control";
  form.appendChild(controlDiv);

  const input = document.createElement("input");
  input.type = "text";
  input.id = "task[name]";
  input.ariaLabel = "Task Name";
  controlDiv.appendChild(input);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add Task";
  submitBtn.type = "button";
  submitBtn.addEventListener("click", () => {
    createTask(project);
  });
  form.appendChild(submitBtn);
};

function getTaskName() {
  return document.getElementById("task[name]").value;
}

export { showTaskFormBtn, getTaskName };