let names = [];

function handleSubmit(event) {
  event.preventDefault();
  names.push(event.target[0].value);
  document.getElementById("name").value = "";
  displayNames();
}

function displayNames() {
  let nameContainer = document.getElementById("namesList");
  let nodeList = names.reduce((acc, cur) => {
    return `${acc} <li>${cur}</li>`;
  }, "");
  nameContainer.innerHTML = nodeList;
}

function getRandom() {
  //TODO: remove name from list
  let newName = names[Math.floor(Math.random() * names.length)];
  let current = document.getElementById("current");
  current.innerHTML = newName;
}
