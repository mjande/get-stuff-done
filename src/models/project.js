export function getProjectFromStorage(id) {
  const project = JSON.parse(localStorage.getItem(id));

  return Project(id, project.name, project.tasks);
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
  const id = Object.keys(localStorage).length;
  const project = Project(id, name);
  
  project.save();

  return project;
};

const Project = (id, name, tasks) => {  
  tasks ??= [];

  function addTask(task) {
    tasks.push(task);
    console.log(`Adding "${task.title}" to project (ID: ${id})`);
  };

  function save() {
    console.log(`Saving project (ID: ${id}) in local storage...`);
    localStorage.setItem(id, JSON.stringify(this));
  }

  return { 
    id, 
    name, 
    addTask, 
    tasks: tasks, 
    save
  };
}



