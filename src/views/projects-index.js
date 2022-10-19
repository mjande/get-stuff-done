const displayProjectsIndex = () => {
  const plusSign = document.createElement("i");
  plusSign.className = "fa-solid fa-plus";
  const newTaskButton = document.createElement("button");
  newTaskButton.type = "button";
  newTaskButton.textContent = "Create task";
  newTaskButton.prepend(plusSign);

  const projects = document.querySelector('main');
  projects.appendChild(newTaskButton);
};

export { displayProjectsIndex };

