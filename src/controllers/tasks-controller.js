import * as TaskFormElement from "../views/task/task-form";
import * as Task from "../models/task";
// import * as TaskElement from "../views/task/task";

function create(event) {
  const parameters = TaskFormElement.parameters(event);
  const projectId = event.target.dataset.projectId;

  const task = Task.create({ name: parameters.name, projectId  });
  console.log(task);
  
  task.save();
  console.log(JSON.parse(localStorage.tasks));

  // TaskElement.display(task);

  // TaskFormElement.hide();
};

export { create }