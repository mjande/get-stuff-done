import * as TaskFormElement from "../views/task/task-form";
import * as Task from "../models/task";
import * as TaskElement from "../views/task/task-element";

function create(event) {
  const parameters = TaskFormElement.parameters(event);
  const projectId = event.target.dataset.projectId;

  const task = Task.create({ text: parameters.text, projectId  });
  task.save();

  TaskElement.display(task);

  TaskFormElement.hide(event);
};

export { create }