console.log("Sanity check");

const spanElement = document.querySelector("[data-js=people-in-space]");

async function peopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log(data);
  return data;
}
peopleInSpace();

async function spanInit() {
  const data = await peopleInSpace();
  spanElement.innerText = data.number;
}

spanInit();
