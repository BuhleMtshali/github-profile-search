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
function renderProfile(response) {
  let profilePic = document.getElementById("profile-pic");
  let userName = document.getElementById("username-id");
  let handle = document.getElementById("handle");
  let dateJoined = document.getElementById("date-joined");
  let bioText = document.getElementById("bio-text");
  let reposTotal = document.getElementById("repos");
  let followersTotal = document.getElementById("followers");
  let followingTotal = document.getElementById("following");
  let locationElement = document.getElementById("city");
  let githubLink = document.getElementById("link");
  let twitterElement = document.getElementById("twitter");
  let linkedinElement = document.getElementById("linkedin");
}
