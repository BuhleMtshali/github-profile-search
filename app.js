//search function
const searchBtn = document.getElementById("submitBtn");
searchBtn.addEventListener("click", searchProfile);

//profile for input value which will call the api function
function searchProfile(event) {
  event.preventDefault();
  let inputValue = document.getElementById("input");
  findProfile(inputValue.value);
  inputValue.value = "";
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
  console.log(response.data);
  userName.innerText = response.data.login;
  handle.innerText = response.data.name;
  //dateJoined.innerText = response.data.created_at;
  //formating the date
  let joinedDate = new Date(response.data.created_at);
  let options = { year: "numeric", month: "long", day: "numeric" };
  dateJoined.innerText = `Joined ${joinedDate.toLocaleDateString(
    "en-us",
    options
  )}`;
  reposTotal.innerText = response.data.public_repos;
  followersTotal.innerText = response.data.followers;
  followingTotal.innerText = response.data.following;
  githubLink.innerText = response.data.html_url;
  //if else for bio text
  if (response.data.bio === null) {
    bioText.innerText = `This profile has no bio`;
  } else {
    bioText.innerText = response.data.bio;
  }
  //if else for location

  if (response.data.location === null) {
    locationElement.innerText = `No location provided`;
  } else {
    locationElement.innerText = response.data.location;
  }
  //if for twitter
  if (response.data.twitter_username) {
    twitterElement.innerText = response.data.twitter_username;
  } else {
    twitterElement.innerText = `Not Available`;
  }
  //linkedin if else
  if (response.data.email) {
    linkedinElement.innerText = response.data.email;
  } else {
    linkedinElement.innerText = `Not Available`;
  }
}
