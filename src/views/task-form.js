import { createTask } from "../controllers/tasks-controller";

function showTaskForm() {
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
  submitBtn.addEventListener("click", createTask);
  form.appendChild(submitBtn);
};

function getTaskName() {
  return document.getElementById("task[name]").value;
}

export { showTaskForm, getTaskName };