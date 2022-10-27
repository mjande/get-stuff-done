function create(project) {
  const fragment = new DocumentFragment;
  const projectElement = document.createElement("div");
  projectElement.className = "project";

  createHeader();

  fragment.append(projectElement);


  function createHeader() {
    const header = document.createElement("h2");
    header.textContent = project.name;
    projectElement.append(header);
  }

  function display() {
    const main = document.querySelector("main");
    main.firstChild.remove();
    main.append(fragment);
  }

  return { display }
}

export { create }