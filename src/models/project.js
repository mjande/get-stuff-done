import * as Task from "./task";

function find(id) {
  const projects = all();

  let project = projects.find((project) => project.id == id);

  if (project == undefined) {
    return undefined;
  } else {
    // Restore project methods to loaded project
    return Object.assign(project, { save, tasks })
  };
}

function all() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

function create({ id, name }) {
  if (id == undefined) {
    const projects = all();
    id = projects.length;
  }
  
  return { id, name, save, tasks };
};

function destroy(id) {
  // Destroy all related tasks
  const project = find(id);
  project.tasks().forEach((task) => {
    Task.destroy(task.id);
  });

  let projects = all();
  const index = projects.findIndex((project) => id == project.id)

  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Object methods (kept separate so they can be loaded to object from local storage)
function save() {
  const projects = all();
  const recordIndex = projects.findIndex((project) => project.id == this.id);
 
  // If a record for this project already exists, replace it; else, add it to projects array
  if (recordIndex == -1) {
    projects.push(this);
  } else {
    projects.splice(recordIndex, 1, this);
  };

  localStorage.setItem("projects", JSON.stringify(projects));
};

function tasks() {
  const allTasks = Task.all();

  return allTasks.filter((task) => {
    return task.projectId == this.id;
  });
}

export { create, all, find, destroy }