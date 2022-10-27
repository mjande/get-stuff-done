function find(id) {
  const project = JSON.parse(localStorage.getItem(id));

  return Project(id, project.name, project.tasks);
};


function index() {
  let values = [];
  let keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    values.push(find(i));
  };

  return values;
}

function create(name) {
  const id = Object.keys(localStorage).length;
  const project = Project(id, name);
  
  project.save();

  return project;
};
 
const Project = (id, name, tasks) => {  
  tasks ??= [];

  function addTask(task) {
    tasks.push(task);
    console.log(`Adding "${task.name}" to project (ID: ${id})`);
  };

  function removeTask(task) {
    const taskIndex = tasks.findIndex((element) => {
      task.name == element.name;
    });

    tasks.splice(taskIndex);
  }

  function save() {
    console.log(`Saving project (ID: ${id}) in local storage...`);
    localStorage.setItem(id, JSON.stringify(this));
  }

  return { 
    id, 
    name, 
    addTask, 
    removeTask,
    tasks: tasks, 
    save
  };
};

export { find, index, create }



