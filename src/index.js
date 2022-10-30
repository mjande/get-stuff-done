import './styles/index.scss';
import * as Project from "./models/project";
import * as ProjectFormElement from './views/project/project-form';
import * as ProjectLinkElement from "./views/project/project-link";

const button = document.getElementById("new-project-btn");
button.onclick = ProjectFormElement.display;

Project.all().forEach((project) => {
  ProjectLinkElement.display(project);
});

