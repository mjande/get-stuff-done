function toggleProjectForm() {  
  document.querySelector('#project-form-modal').classList.toggle("closed");
  document.querySelector('#project-form-modal-overlay').classList.toggle("closed");
}

function getProjectName() {
  return document.getElementById("project[name]").value;
}

export { toggleProjectForm, getProjectName }