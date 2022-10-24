export function getProjectFromStorage(id) {
  const project = JSON.parse(localStorage.getItem(id));
 
  const prototype = Project();

  return Object.assign({}, prototype, project);
};


export function index() {
  let values = [];
  let keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    values.push(getProjectFromStorage(i));
  };

  return values;
}

export function create(name) {
  const project = Project(name);
  
  project.save();

  return project;
};

const Project = (name) => {
  const id = Object.keys(localStorage).length;
  
  let tasks = [];
  function addTask(task) {
    tasks.push(task);
    console.log(`Adding "${task.title}" to project (ID: ${id})`);

    save();
  };

  function save() {
    console.log(`Saving project (ID: ${id}) in local storage...`);
    localStorage.setItem(id, JSON.stringify({ id, name, tasks}));
  }

  return { 
    id, 
    name, 
    addTask, 
    tasks, 
    save
  };
}



