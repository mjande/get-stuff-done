import { createTask } from "../controllers/tasks-controller";
import { find as findProject } from "../models/project";
import { find as findTask } from "../models/task"

function showTaskFormBtn(project) {
  const newTaskDiv = document.querySelector(".new-task");
  newTaskDiv.innerHTML = "";

  const taskBtn = document.createElement("button");
  taskBtn.type = "button";
  taskBtn.textContent = "Add Task";
  taskBtn.dataset.projectId = project.id
  taskBtn.addEventListener("click", showTaskForm);
  newTaskDiv.appendChild(taskBtn);
};

function showTaskForm(event) {
  const form = document.createElement("form");

  const controlDiv = document.createElement("div");
  controlDiv.className = "control";
  form.appendChild(controlDiv);

  const label = document.createElement("label");
  label.textContent = "New Task";
  label.for = "task[name]";
  controlDiv.appendChild(label);

  const input = document.createElement("input");
  input.type = "text";
  input.id = "task[name]";
  input.ariaLabel = "Task Name";
  controlDiv.appendChild(input);

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.dataset.projectId = event.target.dataset.projectId;
  
  if (event.target.hasAttribute('data-task-id')) {
    const taskId = event.target.dataset.taskId;
    const projectId = event.target.dataset.projectId;
    const task = findTask(taskId, projectId);
    input.value = task.name;
    
    submitBtn.textContent = "Update Form";
    // submitBtn.addEventListener("click", () => {
      // updateTask(task);
    // })
    form.appendChild(submitBtn);

    const taskDiv = document.querySelector(`[data-task-id="${task.id}"]`);
    taskDiv.innerHTML = "";
    taskDiv.appendChild(form);
  } else {
    submitBtn.textContent = "Add Task";
    submitBtn.addEventListener("click", createTask);
    form.appendChild(submitBtn);

    const newTaskDiv = document.querySelector(".new-task");
    newTaskDiv.innerHTML = "";
    newTaskDiv.appendChild(form);
  }

  
};

function getTaskName() {
  return document.getElementById("task[name]").value;
}

export { showTaskFormBtn, showTaskForm, getTaskName };