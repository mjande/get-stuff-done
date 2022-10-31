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
  createIdField();
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

  function createIdField() {
    if (project) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "id";
      input.value = project.id;
      form.append(input);
    }
  }

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
    } else {
      button.textContent = "Create Project";
    };
    
    buttonsContainer.appendChild(button);
  }

  function attachListener() {
    form.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (formData.has("id")) {
        ProjectsController.update(formData);
      } else {
        ProjectsController.create(formData);
      }
    }
  }
};

function hide() {
  document.querySelector(".form-container").remove();
  document.querySelector(".overlay").remove();
}

export { display, hide }