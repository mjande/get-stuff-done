import * as Project from "../../models/project";

function display(event) {
  const project = Project.find(event.target.dataset.projectId);
  
  // Create layout
  const fragment = new DocumentFragment;
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
  form.append(buttonsContainer);
  fragment.append(form);
  document.querySelector(".new-task").append(fragment);

  // Element functions
  function createHeader() {
    const header = document.createElement("h4");
    header.textContent = "New Task";
    form.appendChild(header);
  }

  function createNameField() {
    const control = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    control.className = "control";

    label.for = "task[name]";
    label.textContent = "Name";
    control.append(label);

    input.type = "text";
    input.id = "task[name]";
    control.append(input);

    form.append(control);
  };

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Cancel";
    // Event listener
    buttonsContainer.append(button);
  }

  function createSubmitButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = project.id;
    // Event listener
    buttonsContainer.appendChild(button);
  }
};

export { display }