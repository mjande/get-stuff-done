const displayProjectsIndex = (tasks) => {
  displayCreateTaskBtn();
};

const displayCreateTaskBtn = () => {
  const plusSign = document.createElement("i");
  plusSign.className = "fa-solid fa-plus";
  const newTaskButton = document.createElement("button");
  newTaskButton.type = "button";
  newTaskButton.textContent = "Create task";
  newTaskButton.prepend(plusSign);

  const mainContainer = document.querySelector('main');
  mainContainer.appendChild(newTaskButton);
};

export { displayProjectsIndex };

