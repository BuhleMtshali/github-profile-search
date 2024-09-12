//search function
const searchBtn = document.getElementById("submitBtn");
searchBtn.addEventListener("submit", searchProfile);

//profile for input value which will call the api function
function searchProfile(event) {
  event.preventDefault();
  let inputValue = document.getElementById("input").value;
  findProfile(inputValue);
}

//function for api fetch call
function findProfile(profile) {
  let apiUrl = `https://api.github.com/users/${profile}`;
  axios.get(apiUrl).then(renderProfile);
}

//render function
function renderProfile(response) {}
