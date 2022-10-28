import * as DeleteProjectFormElement from "./delete-project-form";

function create(project) {
  // Create layout
  const fragment = new DocumentFragment;
  const projectElement = document.createElement("div");
  projectElement.className = "project";
  const headerContainer = document.createElement("div");
  headerContainer.className = "level";
  const tasksContainer = document.createElement("div");
  tasksContainer.className = "tasks";

  // Create elements
  createHeader();
  createDeleteButton();
  createTasksHeader();
  createAddTaskButton();

  // Attach layout to fragment
  projectElement.append(headerContainer);
  projectElement.append(tasksContainer);
  fragment.append(projectElement);

  // Element functions
  function createHeader() {
    const header = document.createElement("h2");
    header.textContent = project.name;
    headerContainer.append(header);
  };

  function createDeleteButton() {
    const button = document.createElement("i");
    button.className = "fa-solid fa-trash-can icon";
    button.dataset.id = project.id;
    button.onclick = DeleteProjectFormElement.display;
    headerContainer.append(button);
  };

  function createTasksHeader() {
    const header = document.createElement("h3");
    header.textContent = "Tasks";
    tasksContainer.append(header);
  }

  function createAddTaskButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add Task";
    // button.onclick = TaskForm.display;
    tasksContainer.append(button);
  }

  // Attach fragment to container on page
  function display() {
    const main = document.querySelector("main");
    if (main.firstChild) {
      main.firstChild.remove()
    };
    main.append(fragment);
  }

  return { display }
}

export { create }