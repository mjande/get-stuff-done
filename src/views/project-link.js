function create(project) {
  const fragment = new DocumentFragment;

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;
  link.onclick = "";
  fragment.append(link);

  function display() {
    document.querySelector(".project-links").append(fragment);
  }

  return { fragment, display }
}

export { create }