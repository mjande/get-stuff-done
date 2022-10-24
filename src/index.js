import './styles/index.scss';
import { toggleProjectForm } from './views/project-form';
import { createProject } from './controllers/projects-controller';

window.toggleProjectForm = toggleProjectForm;
window.createProject = createProject;
