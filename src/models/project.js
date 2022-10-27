function create({ id, name }) {
  return Project({ name });
};

function all() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

function Project({ id, name }) {
  if (!id) {
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

export { create, all }