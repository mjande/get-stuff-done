import * as ProjectController from "../../controllers/projects-controller";

function create(project) {
  const fragment = new DocumentFragment;

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;
  link.dataset.id = project.id;
  link.onclick = ProjectController.show;
  fragment.append(link);

  function display() {
    document.querySelector(".project-links").append(fragment);
  }

  return { fragment, display }
}

export { create }