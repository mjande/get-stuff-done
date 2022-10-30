import * as ProjectFormElement from "../views/project/project-form";
import * as Project from "../models/project";
import * as ProjectElement from "../views/project/project-element";
import * as ProjectLinkElement from "../views/project/project-link";
import * as DeleteProjectFormElement from "../views/project/delete-project-form";

function create() {
  const parameters = ProjectFormElement.parameters();

  const project = Project.create({ name: parameters.name });
  project.save();

  ProjectElement.create(project).display();

  ProjectLinkElement.create(project).display();

  ProjectFormElement.hide();
};

function show(event) {
  const id = event.target.dataset.id;

  const project = Project.find(id);

  ProjectElement.create(project).display();
}

function update(event) {
  const id = event.currentTarget.dataset.id;
  const project = Project.find(id);

  // Update record in local storage
  project.name = ProjectFormElement.parameters().name;
  project.save();

  // Update project link in sidebar
  const oldProjectLink = document.querySelector(`a[data-id="${id}"]`);
  if (oldProjectLink.textContent != project.name) {
    const newProjectLink = ProjectLinkElement.create(project).fragment;
    document.querySelector(".project-links").replaceChild(newProjectLink, oldProjectLink);
  }
}

function destroy(event) {
  // Remove project from local storage
  const id = event.target.dataset.id;
  Project.destroy(id);

  // Remove project link in sidebar
  document.querySelector(`a[data-id="${id}"]`).remove();

  // Return to home page
  document.querySelector(".project").remove();

  // Hide delete project form
  DeleteProjectFormElement.hide();
}

export { create, show, update, destroy };