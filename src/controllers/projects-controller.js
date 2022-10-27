import * as ProjectFormElement from "../views/project-form";
import * as Project from "../models/project";
import * as ProjectElement from "../views/project";
import * as ProjectLinkElement from "../views/project-link";

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

export { create, show };