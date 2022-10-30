import * as TaskFormElement from "../views/task/task-form";
import * as Task from "../models/task";
// import * as TaskElement from "../views/task/task";

function create(event) {
  const parameters = TaskFormElement.parameters(event);
  console.log(parameters.name);
  // const projectId = event.target.dataset.projectId;

  // const task = Task.create({ name: parameters.name, projectId  });
  // task.save();

  // TaskElement.display(task);

  // TaskFormElement.hide();
};

export { create }