function display() {

  const form = document.createElement("form");
  form.className = "project-form";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  createHeader();
  createNameField();
  createSubmitButton();

  document.querySelector("body").append(form);
  document.querySelector("body").append(overlay);

  function createHeader() {
    const header = document.createElement("h1");
    header.textContent = "New Project";
    form.appendChild(header);
  };

  function createNameField() {
    const control = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    control.className = "control";

    label.for = "project[name]";
    label.textContent = "Name";
    
    input.type = "text";
    input.id = "project[name]";

    control.appendChild(label);
    control.appendChild(input);
    form.appendChild(control);
  };

  function createSubmitButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Create Project";
    button.onclick = "";
    form.appendChild(button);
  }
};

export { display }