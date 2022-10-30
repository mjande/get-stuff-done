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

  let isCompleted = false;
  
  return { id, text, projectId, isCompleted, save }
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
  const recordIndex = tasks.findIndex((task) => task.id == this.id);

  // If a record for this task already exists, replace it; else, add it to tasks array

  if (recordIndex == -1) {
    tasks.push(this);
  } else {
    tasks.splice(recordIndex, 1, this);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export { find, all, create, destroy }