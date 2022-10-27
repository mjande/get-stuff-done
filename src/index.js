import './styles/index.scss';
import * as ProjectForm from './views/project-form';

const button = document.getElementById("new-project-btn");
button.onclick = ProjectForm.display;
