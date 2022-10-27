import * as ProjectForm from "../views/project-form";
import * as Project from "../models/project";

function create() {
  const parameters = ProjectForm.parameters();

  const project = Project.create({ name: parameters.name });
  project.save();
  console.log(Project.all());

  // ProjectElement.create(project).display();

  // ProjectLink.create(project).display();

  // ProjectForm.hide();
};

export { create };