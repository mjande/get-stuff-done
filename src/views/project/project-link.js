import * as ProjectController from "../../controllers/projects-controller";

function display(project) {
  const fragment = new DocumentFragment;

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;
  link.dataset.id = project.id;
  link.onclick = ProjectController.show;
  fragment.append(link);

  document.querySelector(".project-links").append(fragment);
}

export { display }