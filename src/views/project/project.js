import * as DeleteProjectFormElement from "./delete-project-form";
import * as TaskForm from "../task/task-form";

function display(project) {
  // Create layout
  const fragment = new DocumentFragment;
  const projectElement = document.createElement("div");
  projectElement.className = "project";
  const headerContainer = document.createElement("div");
  headerContainer.className = "level";
  const tasksContainer = document.createElement("div");
  tasksContainer.className = "tasks";
  const newTaskContainer = document.createElement("div");
  newTaskContainer.className = "new-task";

  // Create elements
  createHeader();
  createDeleteButton();
  createTasksHeader();
  createAddTaskButton();

  // Attach layout to fragment
  projectElement.append(headerContainer);
  projectElement.append(tasksContainer);
  projectElement.append(newTaskContainer);
  fragment.append(projectElement);

  const main = document.querySelector("main");
  if (main.firstChild) {
    main.firstChild.remove()
  };
  main.append(fragment);

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
    button.dataset.projectId = project.id
    button.onclick = TaskForm.display;
    newTaskContainer.append(button);
  }
}

export { display }