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
  
  localStorage.setItem(project.id, JSON.stringify(project));

  console.log(`Creating project (ID: ${project.id}) in local storage...`);
  return project;
};

const Project = (name) => {
  const id = Object.keys(localStorage).length;
  
  let tasks = [];
  function addTask(task) {
    tasks.push(task);
  };

  return { 
    id, 
    name, 
    addTask, 
    tasks
  };
}



