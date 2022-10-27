import { find as findProject } from "./project";

function create(name, project) {  
  // IDs are local to each project (ex: first task in a project has ID: 0)
  const id = project.tasks.length;
  const task = Task(id, name, project.id);
  return task;
};

function Task(id, name, projectId) {
  function update(newName) {
    name = newName;
  };
  
  return { id, name, projectId, update };
};

function find(id, projectId) {
  const project = findProject(projectId);
  const task = project.tasks[id];

  return Task(task.id, task.name, task.projectId);
};

export { find, create };


