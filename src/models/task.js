import * as Project from "../models/project";

function find(id) {
  const tasks = all();

  let task = tasks.find((task) => task.id == id);

  return Object.assign(task, { save })
}

function all() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function create({ id, text, projectId }) {
  if (id == undefined) {
    const tasks = all();
    id = tasks.length
  };
  
  return { id, text, projectId, save }
};

function destroy(id) {
  let tasks = all();
  const index = tasks.findIndex((task) => id == task.id)
  
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Task methods (kept separate so they can be loaded to object from local storage)
function save() {
  const tasks = all();

  tasks.push(this);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export { find, all, create, destroy }