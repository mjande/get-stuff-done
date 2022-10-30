import * as Project from "../../models/project";
import * as ProjectsController from "../../controllers/projects-controller";

function display(event) {
  const project = Project.find(event.currentTarget.dataset.id)
  
  // Create layout
  const fragment = new DocumentFragment;
  const form = document.createElement("form");
  form.className = "delete-project-form modal";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  // Create elements
  createHeader();
  createBody();
  createCancelButton();
  createDeleteButton();

  // Attach elements to fragment and attach fragment to page
  form.append(buttonsContainer);
  fragment.append(form);
  fragment.append(overlay);
  document.querySelector("body").append(fragment);

  function createHeader() {
    const header = document.createElement("h2");
    header.textContent = "Delete Project?"
    form.append(header);
  }
  
  function createBody() {
    const body = document.createElement("div");
    const projectName = document.createElement("b");
    projectName.textContent = project.name;
    body.append("Are you sure you want to delete ");
    body.append(projectName);
    body.append("?");

    form.append(body);
  }

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button"
    button.textContent = "Cancel";
    button.onclick = hide;
    buttonsContainer.append(button);
  }

  function createDeleteButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button"
    button.textContent = "Delete";
    button.dataset.id = project.id;
    button.onclick = ProjectsController.destroy;
    buttonsContainer.append(button);
  }
}

function hide() {
  document.querySelector(".delete-project-form").remove();
  document.querySelector(".overlay").remove()
};

export { display, hide }