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
  createPriorityButtons();
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

    label.for = "task_text";
    label.textContent = "Task";
    control.append(label);

    input.type = "text";
    input.id = "task_text";
    control.append(input);

    form.append(control);
  };

  function createPriorityButtons() {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Priority";
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "radio-buttons";
   
    for (let i = 1; i <= 4; i++) {
      const control = document.createElement("div");
      control.className = `priority${i}`
      const button = document.createElement("input");
      button.type = "radio";
      button.name = "priority";
      button.id = `priority${i}`;
      control.append(button);

      const label = document.createElement("label");
      label.htmlFor = `priority${i}`;
      label.textContent = `Priority ${i}`;
      label.className = `priority${i}`;
      control.append(label);

      buttonsContainer.append(control);
    }

    fieldset.append(legend);
    fieldset.append(buttonsContainer);
    form.append(fieldset);
  }

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
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
  const taskForm = document.querySelector(".new-task").firstChild;
  const project = Project.find(event.target.dataset.projectId);

  createAddTaskButton();

  function createAddTaskButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = project.id
    button.onclick = display;
    document.querySelector(".new-task").replaceChild(button, taskForm);
  }
};

function parameters(event) {
  const taskForm = event.target.parentNode.parentNode;
  
  const text = taskForm.querySelector("#task_text").value;
  
  return { text };
}

export { display, hide, parameters }