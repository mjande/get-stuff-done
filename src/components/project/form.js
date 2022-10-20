function display() {  
  document.querySelector('#project-form-modal').classList.toggle("closed");
  document.querySelector('#project-form-modal-overlay').classList.toggle("closed");
}

export { display }