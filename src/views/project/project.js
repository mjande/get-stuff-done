import * as DeleteProjectFormElement from "./delete-project-form";
import * as TaskForm from "../task/task-form";
import * as TaskElement from "../task/task-element";

function create(project) {
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
  createTasks();
  createAddTaskButton();

  // Attach layout to fragment
  projectElement.prepend(headerContainer);
  projectElement.append(tasksContainer);
  projectElement.append(newTaskContainer);
  fragment.append(projectElement);

  function display() {
    const main = document.querySelector("main");
      if (main.firstChild) {
        main.firstChild.remove()
      };
    main.append(fragment);
  };

  return { fragment, display }
  

  // Element functions
  function createHeader() {
    const header = document.createElement("h2");
    header.textContent = project.name;
    headerContainer.append(header);
  };

  function createDeleteButton() {
    const button = document.createElement("i");
    button.type = "button";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can icon";

    button.dataset.id = project.id;
    button.onclick = DeleteProjectFormElement.display;

    button.append(icon);
    headerContainer.append(button);
  };

  function createTasksHeader() {
    const header = document.createElement("h3");
    header.textContent = "Tasks";
    projectElement.append(header);
  }

  function createTasks() {
    const tasks = new DocumentFragment;
    project.tasks().forEach((task) => {
      tasks.append(TaskElement.create(task).fragment);
    });
    tasksContainer.append(tasks);
  }

  function createAddTaskButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = project.id
    button.onclick = TaskForm.display;
    newTaskContainer.append(button);
  }
}

export { create }