import { find as findProject } from "./project";

function create(name, project) {  
  // IDs are local to each project (ex: first task in a project has ID: 0)
  const id = project.tasks.length;
  const task = Task(id, name, project.id);
  return task;
};

function Task(id, name, projectId) {
  return { id, name, projectId };
};

function find(id, projectId) {
  const project = findProject(projectId);
  return project.tasks[id];
};

export { find, create };


