import './styles/index.scss';
import * as Project from "./models/project";
import * as ProjectFormElement from './views/project/project-form';
import * as ProjectLinkElement from "./views/project/project-link";


const button = document.getElementById("new-project-btn");
button.onclick = ProjectFormElement.display;

const projectLinksFragment = new DocumentFragment;
Project.all().forEach((project) => {
  const projectLinkElement = ProjectLinkElement.create(project).fragment;
  projectLinksFragment.append(projectLinkElement);
});
document.querySelector(".project-links").append(projectLinksFragment);
