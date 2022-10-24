export function getProjectFromStorage(id) {
  const project = JSON.parse(localStorage.getItem(id));
 
  const prototype = Project();

  return Object.assign({}, prototype, project);
};


export function index() {
  let values = [];
  let keys = Object.keys(localStorage);
  let project = getProjectFromStorage(keys[0]);
  console.log(project);

  // for (let i = 0; i < keys.length - 1; i++) {
    // values.push(getProjectFromStorage(keys[i]));
  // }

  return values;
}

export function create(name) {
  const project = Project(name);
  
  localStorage.setItem(project.id, JSON.stringify(project));

  console.log(`Creating project called ${name} in local storage...`);
};

const Project = (name) => {
  const id = Object.keys(localStorage).length;
  
  let tasks = [];
  const addTask = (task) => {
    tasks.push(task);
  };

  return { id, name, tasks, addTask };
}



