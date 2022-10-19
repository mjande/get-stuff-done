import './styles/index.scss';
import { create as createProject } from './controllers/projectsController';
import { createTask } from './models/task';
import { displayProjectsIndex } from './views/projects-index';

const task1 = createTask("Create a new project");
const task2 = createTask("Add some tasks");
createProject("Get started with GSD", [task1, task2]);





