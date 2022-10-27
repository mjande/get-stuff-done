import * as ProjectFormElement from "../views/project-form";
import * as Project from "../models/project";

function create() {
  const parameters = ProjectFormElement.parameters();

  const project = Project.create({ name: parameters.name });
  project.save();

  // ProjectElement.display(project);

  // ProjectLink.create(project).display();

  ProjectFormElement.hide();
};

export { create };