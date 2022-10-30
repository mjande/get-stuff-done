import * as Project from "../../models/project";
import * as TasksController from "../../controllers/tasks-controller";

function display(event) {
  const project = Project.find(event.target.dataset.projectId);
  const newTaskButton = document.querySelector(".new-task").firstChild;
  
  // Create layout
  const fragment = new DocumentFragment;
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";
  const form = document.createElement("form");
  form.className = "task-form";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";

  // Create elements
  createHeader();
  createNameField();
  createCancelButton();
  createSubmitButton();

  // Attach elements to fragment
  formContainer.append(form);
  form.append(buttonsContainer);
  fragment.append(formContainer);
  document.querySelector(".new-task").replaceChild(formContainer, newTaskButton);

  // Element functions
  function createHeader() {
    const header = document.createElement("h4");
    header.textContent = "New Task";
    formContainer.appendChild(header);
  }

  function createNameField() {
    const control = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    control.className = "control";

    label.for = "task_name";
    label.textContent = "Name";
    control.append(label);

    input.type = "text";
    input.id = "task_name";
    control.append(input);

    form.append(control);
  };

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Cancel";
    button.dataset.projectId = project.id;
    button.onclick = hide;
    buttonsContainer.append(button);
  }

  function createSubmitButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = project.id;
    button.onclick = TasksController.create;
    buttonsContainer.appendChild(button);
  }
};

function hide(event) {
  const taskForm = document.querySelector(".new-task").firstChild
  const project = Project.find(event.target.dataset.projectId);

  createAddTaskButton();

  function createAddTaskButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = project.id
    button.onclick = display;
    document.querySelector(".new-task").replaceChild(button, taskForm);
  }
};

function parameters(event) {
  const taskForm = event.target.parentNode.parentNode;
  
  const name = taskForm.querySelector("#task_name").value;
  
  return { name };
}

export { display, hide, parameters }