export const displayProject = (project) => {
  const projectsContainer = document.querySelector('.projects');

  const newProject = document.createElement("div");
  newProject.className = "project";
  
  const newProjectHeader = document.createElement("h3");
  newProjectHeader.textContent = project.name;
  newProject.appendChild(newProjectHeader);

  console.log(project.tasks);

  project.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = task.title + "Id"
    const label = document.createElement("label");
    label.for = task.title + "Id"
    label.textContent = task.title

    taskDiv.appendChild(input);
    taskDiv.appendChild(label);

    newProject.appendChild(taskDiv);
  })

  projectsContainer.appendChild(newProject);
}