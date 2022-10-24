const container = document.querySelector('.content');

export function showProject(project) {
  container.innerHTML = "";
  
  const header = document.createElement("h2");
  header.textContent = project.name;

  container.appendChild(header);

  console.log(`Showing project (ID: ${project.id}) on home page`);
};