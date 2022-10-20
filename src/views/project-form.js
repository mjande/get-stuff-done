import { create as createProject } from "../controllers/projectsController";

const displayNewProjectForm = (event) => {
  const formDiv = document.querySelector(".new-project");
  formDiv.innerHTML = "";
  
  const form = document.createElement("form");
  form.onsubmit = createProject;
  formDiv.appendChild(form);
  
  // Name Input
  const nameControl = document.createElement("div");
  nameControl.className = "new-project-name-control"
  const nameLabel = document.createElement("label");
  nameLabel.for = "new-project-name";
  nameLabel.textContent = "Project Name:";
  nameControl.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "new-project-name";
  nameControl.appendChild(nameInput);
  form.appendChild(nameControl);

  // Submit Button
  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.className = "create-project-button"
  submitBtn.addEventListener("click", createProject);
  submitBtn.textContent = "Create Project";
  form.appendChild(submitBtn);
}

export { displayNewProjectForm };