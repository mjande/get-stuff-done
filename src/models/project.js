import * as Task from "./task";

function find(id) {
  const projects = all();

  let project = projects.find((project) => project.id == id);

  // Restore project methods to loaded project
  return Object.assign(project, { save, tasks })
}

function all() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

function destroy(id) {
  let projects = all();

  const index = projects.findIndex((project) => id == project.id)

  projects.splice(index);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function create({ id, name }) {
  if (id == undefined) {
    const projects = all();
    id = projects.length;
  }
  
  return { id, name, save, tasks };
};

// Object methods (kept separate so they can be loaded to object from local storage)
function save() {
  const projects = all();

  projects.push(this);
  localStorage.setItem("projects", JSON.stringify(projects));
};

function tasks() {
  const allTasks = Task.all();

  return allTasks.filter((task) => {
    return task.projectId == this.id;
  });
}

export { create, all, find, destroy }