import * as TasksController from "../../controllers/tasks-controller";

function create(task) {
  // Create layout
  const fragment = new DocumentFragment;
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.dataset.id = task.id;
  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "task-buttons";

  // Create elements
  createControl();
  createDeleteButton();

  // Attach layout to fragment 
  taskElement.append(taskControl);
  taskElement.append(buttonsContainer);
  fragment.append(taskElement);

  // Element functions
  function createControl() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task_completion";
    
    const text = document.createElement("label");
    text.for = "task_completion";
    text.textContent = task.text;

    taskControl.append(checkbox);
    taskControl.append(text);
  };

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

  // Display function 
  function display() {
    document.querySelector(".tasks").append(fragment);
  };

  return { fragment, display }
};

export { create }