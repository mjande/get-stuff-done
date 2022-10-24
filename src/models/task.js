export function create(title, projectID) {  
  return Task(title, projectID);
};

function Task(title, projectID) {
  return { title, projectID };
}


