export function showTaskForm() {
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
  form.appendChild(submitBtn);
}