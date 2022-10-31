import * as TaskFormElement from "../views/task/task-form";
import * as Task from "../models/task";
import * as TaskElement from "../views/task/task-element";

function create(formData) {  
  const task = Task.create({ 
    text: formData.get("text"), 
    projectId: formData.get("projectId"),
    priority: formData.get("priority")  
  });
  task.save();

  TaskElement.create(task).display();

  TaskFormElement.hide(formData.get("projectId"));
};

function toggleCompletion(event) {
  const id = event.target.parentNode.parentNode.dataset.id;
  const task = Task.find(id);

  if (task.isCompleted) {
    task.isCompleted = false;
  } else {
    task.isCompleted = true;
  }
  
  task.save();

  const text = event.target.parentNode.querySelector("label");
  text.classList.toggle("completed");
}

function destroy(event) {
  // Remove task from local storage
  const id = event.currentTarget.dataset.id;
  Task.destroy(id);

  // Remove task from project display
  document.querySelector(`[data-id="${id}"].task`).remove();
}

export { create, toggleCompletion, destroy }