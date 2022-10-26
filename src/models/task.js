export function create(name, project) {  
  // IDs are local to each project (ex: first task in a project has ID: 0)
  const id = project.tasks.length;
  const task = Task(id, name, project.id);
  return task;
};

function Task(id, name, projectID) {
  return { id, name, projectID };
};


