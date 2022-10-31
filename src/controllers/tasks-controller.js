import * as Task from "../models/task";
import * as ProjectElement from "../views/project/project-element";
import * as Project from "../models/project";

function create(formData) {  
  const task = Task.create({ 
    text: formData.get("text"), 
    projectId: formData.get("projectId"),
    priority: formData.get("priority"),
    dueDate: formData.get("dueDate")  
  });
  task.save();

  const project = Project.find(task.projectId);
  ProjectElement.create(project).display();
};

function toggleCompletion(event) {
  const id = event.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
  const task = Task.find(id);

  if (task.isCompleted) {
    task.isCompleted = false;
  } else {
    task.isCompleted = true;
  }
  
  task.save();

  const text = event.target.parentNode.querySelector("label");
  text.classList.toggle("completed");
};

function update(formData) {
  const id = formData.get("id");
  const task = Task.find(id);

  // Update task in local storage
  task.text = formData.get("text");
  task.priority = formData.get("priority");
  task.dueDate = formData.get("dueDate");
  task.save();

  // Update task display
  const project = Project.find(task.projectId);
  ProjectElement.create(project).display();
}

function destroy(event) {
  // Remove task from local storage
  const id = event.currentTarget.dataset.id;
  Task.destroy(id);

  // Remove task from project display
  document.querySelector(`[data-id="${id}"].task`).remove();
}

export { create, toggleCompletion, update, destroy }