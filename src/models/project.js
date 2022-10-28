function find(id) {
  const projects = all();

  let project = projects.find((project) => project.id == id);

  // Restore project methods to loaded project
  return create(project);
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
  
  function save() {
    const projects = all();

    projects.push(this);
    localStorage.setItem("projects", JSON.stringify(projects));
  };
  
  return { id, name, save };
};

export { create, all, find, destroy }