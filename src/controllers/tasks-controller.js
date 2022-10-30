import * as TaskFormElement from "../views/task/task-form";
import * as Task from "../models/task";
import * as TaskElement from "../views/task/task-element";

function create(event) {
  const parameters = TaskFormElement.parameters(event);
  const projectId = event.target.dataset.projectId;

  const task = Task.create({ text: parameters.text, projectId  });
  task.save();

  TaskElement.create(task).display();

  TaskFormElement.hide(event);
};

function destroy(event) {
  // Remove task from local storage
  const id = event.currentTarget.dataset.id;
  Task.destroy(id);

  // Remove task from project display
  document.querySelector(`[data-id="${id}"].task`).remove();
}

export { create, destroy }