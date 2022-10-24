function DOMProject(project) {
  const container = document.createElement("div");
  container.className = "project";
  container.id = project.name;

  const header = document.createElement("h2");
  header.textContent = project.name;
  container.appendChild(header);

  return container;
};

function projectLink(project) {
  const link = document.createElement('a');
  link.textContent = project.name;
  link.href = "#";
  link.addEventListener("click", function(event) {
    console.log(event.target);
  });

  return link;
};

function updateMain(project) {
  const projectElement = DOMProject(project);
  const mainContainer = document.querySelector("main");
  mainContainer.appendChild(projectElement);
};

export { projectLink, updateMain };

