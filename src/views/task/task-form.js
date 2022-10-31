import * as Task from "../../models/task";
import * as Project from "../../models/project";
import * as TaskElement from "./task-element";
import * as TasksController from "../../controllers/tasks-controller";

function display(event) {
  const task = Task.find(event.currentTarget.dataset.id);
  const projectId = event.currentTarget.dataset.projectId;
  
  // Create layout
  const fragment = new DocumentFragment;
  const formContainer = document.createElement("div");
  formContainer.className = "task-form-container";
  const form = document.createElement("form");
  form.className = "task-form";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";

  // Create elements
  createHeader();
  createIdField();
  createProjectIdField();
  createTextField();
  createPriorityButtons();
  createDateField();
  createCancelButton();
  createSubmitButton();
  attachListener();

  // Attach elements to fragment
  formContainer.append(form);
  form.append(buttonsContainer);
  fragment.append(formContainer);
  if (task) {
    const taskElement = document.querySelector(`.task-container[data-id="${task.id}"]`);
    taskElement.replaceChild(formContainer, taskElement.firstChild);
  } else {
    const newTaskButton = document.querySelector(".new-task").firstChild;
    document.querySelector(".new-task").replaceChild(formContainer, newTaskButton);
  }

  // Element functions
  function createHeader() {
    const header = document.createElement("h4");
    if (task) {
      header.textContent = "Update Task";
    } else {
      header.textContent = "New Task";
    }
    formContainer.appendChild(header);
  };

  function createIdField() {
    if (task) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "id";
      input.value = task.id;
      form.append(input);
    }
  }

  function createProjectIdField() {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "projectId";
    input.value = projectId;
    form.append(input);
  }

  function createTextField() {
    const control = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    control.className = "control";

    label.for = "task_text";
    label.textContent = "Task";
    control.append(label);

    input.type = "text";
    input.id = "task_text";
    input.name = "text";
    if (task) {
      input.value = task.text;
    }
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
      button.value = i;
      button.id = `priority${i}`;
      if (i == 4 && !task) {
        button.checked = true;
      }  
      control.append(button);

      const label = document.createElement("label");
      label.htmlFor = `priority${i}`;
      label.textContent = `Priority ${i}`;
      label.className = `priority${i}`;
      control.append(label);

      buttonsContainer.append(control);
    }

    if (task) {
      const button = buttonsContainer.querySelector(`#priority${task.priority}`);
      button.checked = true;
    }

    fieldset.append(legend);
    fieldset.append(buttonsContainer);
    form.append(fieldset);
  };

  function createDateField() {
    const control = document.createElement("div");
    control.className = "control";

    const label = document.createElement("label");
    label.for = "task_due-date";
    label.textContent = "Due Date";
    control.append(label);

    const input = document.createElement("input");
    input.type = "date";
    input.id = "task_due-date";
    input.name = "dueDate";
    control.append(input);
    if (task) {
      input.value = task.dueDate;
    }

    form.append(control);
  }

  function createCancelButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Cancel";
    if (task) {
      button.dataset.id = task.id
    }
    button.dataset.projectId = projectId;
    button.onclick = cancelForm;
    buttonsContainer.append(button);
  }

  function createSubmitButton() {
    const button = document.createElement("button");
    button.className = "button";
    if (task) {
      button.textContent = "Update Task";
    } else {
      button.textContent = "Add Task";
    }
    buttonsContainer.appendChild(button);
  }

  function attachListener() {
    form.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (formData.has("id")) {
        TasksController.update(formData)
      } else {
        TasksController.create(formData)
      }
    }
  }
};

function cancelForm(event) {  
  const newTaskForm = document.querySelector(".new-task .task-form-container")
  const editTaskForm = document.querySelector(".tasks .task-form-container");

  if (newTaskForm) {
    newTaskForm.remove();
    createAddTaskButton();
  } else {
    const id = event.target.dataset.id;
    const container = document.querySelector(`.task-container[data-id="${id}"]`);
    const taskElement = TaskElement.create(Task.find(id)).fragment;
    container.replaceChild(taskElement.firstChild, editTaskForm);
  };

  function createAddTaskButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Add Task";
    button.dataset.projectId = event.target.dataset.projectId;
    button.onclick = display;
    document.querySelector(".new-task").append(button);
  }
};

export { display }