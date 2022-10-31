import * as ProjectsController from "../../controllers/projects-controller";
import * as Project from "../../models/project";

function display(event) {
  const project = Project.find(event.currentTarget.dataset.id);
  
  // Create layout
  const fragment = new DocumentFragment;
  const formContainer = document.createElement("div");
  formContainer.className = "form-container modal";
  const form = document.createElement("form");
  form.className = "project-form";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  // Create elements
  createHeader();
  createNameField();
  createCancelButton();
  createSubmitButton();
  attachListener();

  // Attach elements to fragment and attach fragment to page
  formContainer.append(form);
  form.append(buttonsContainer);
  fragment.append(formContainer);
  fragment.append(overlay);
  document.querySelector("body").append(fragment);

  // Element functions
  function createHeader() {
    const header = document.createElement("h1");
    
    if (project) {
      header.textContent = "Edit Project"
    } else {
      header.textContent = "New Project";
    };
    
    formContainer.appendChild(header);
  };

  function createNameField() {
    const control = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    control.className = "control";

    label.for = "project[name]";
    label.textContent = "Name";
    
    input.type = "text";
    input.id = "project[name]";
    input.name = "name";
    if (project) {
      input.value = project.name;
    };

    control.appendChild(label);
    control.appendChild(input);
    form.appendChild(control);
  };

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Cancel";
    button.onclick = hide;
    buttonsContainer.append(button);
  }

  function createSubmitButton() {
    const button = document.createElement("button");
    button.className = "button";

    if (project) {
      button.textContent = "Update Project";
      button.dataset.id = project.id;
      // button.onclick = ProjectsController.update;
    } else {
      button.textContent = "Create Project";
      // button.onclick = ProjectsController.create;
    };
    
    buttonsContainer.appendChild(button);
  }

  function attachListener() {
    form.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      
      ProjectsController.create(formData);
    }
  }
};

function hide() {
  document.querySelector(".form-container").remove();
  document.querySelector(".overlay").remove();
}

function parameters() {
  const name = document.getElementById("project[name]").value;

  return { name }
}

export { display, hide, parameters }