import * as ProjectFormElement from "../views/project/project-form";
import * as Project from "../models/project";
import * as ProjectElement from "../views/project/project";
import * as ProjectLinkElement from "../views/project/project-link";
import * as DeleteProjectFormElement from "../views/project/delete-project-form";

function create() {
  const parameters = ProjectFormElement.parameters();

  const project = Project.create({ name: parameters.name });
  project.save();

  ProjectElement.create(project).display();

  ProjectLinkElement.display(project);

  ProjectFormElement.hide();
};

function show(event) {
  const id = event.target.dataset.id;

  const project = Project.find(id);

  ProjectElement.create(project).display();
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

export { create, show, destroy };