import * as TasksController from "../../controllers/tasks-controller";
import * as TaskFormElement from "./task-form";
import format from 'date-fns/format'

function create(task) {
  // Create layout
  const fragment = new DocumentFragment;
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  taskContainer.dataset.id = task.id;
  const taskElement = document.createElement("div");
  taskElement.className = `task priority${task.priority}`;
  const taskLeft = document.createElement("div");
  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "task-buttons";

  // Create elements
  createControl();
  createDueDate();
  createEditButton();
  createDeleteButton();

  // Attach layout to fragment 
  taskContainer.append(taskElement);
  taskElement.append(taskLeft);
  taskElement.append(buttonsContainer);
  fragment.append(taskContainer);

  // Element functions
  function createControl() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task_completion";
    checkbox.onchange = TasksController.toggleCompletion;
    
    const text = document.createElement("label");
    text.for = "task_completion";
    text.textContent = task.text;

    if (task.isCompleted) {
      checkbox.setAttribute("checked", "")
      text.className = "completed"
    }

    taskControl.append(checkbox);
    taskControl.append(text);
    taskLeft.append(taskControl);
  };

  function createDueDate() {
    const dueDate = document.createElement("div");
    dueDate.textContent = "Due: " + format(new Date(task.dueDate), "eee, MMM do y")
    taskLeft.append(dueDate);
  }

  function createEditButton() {
    const button = document.createElement("button");
    button.type = "button";

    const icon = document.createElement("icon");
    icon.className = "fa-solid fa-pen-to-square icon";

    button.dataset.id = task.id;
    button.onclick = TaskFormElement.display;

    button.append(icon);
    buttonsContainer.append(button);
  }

  function createDeleteButton() {
    const button = document.createElement("button");
    button.type = "button";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can icon";

    button.dataset.projectId = task.projectId;
    button.dataset.id = task.id;
    button.onclick = TasksController.destroy;

    button.append(icon);
    buttonsContainer.append(button);
  }

  return { fragment }
};

export { create }