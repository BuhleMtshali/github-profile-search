//search function
const searchBtn = document.getElementById("submitBtn");
searchBtn.addEventListener("click", searchProfile);

//profile for input value which will call the api function
let inputValue = document.getElementById("input");
function searchProfile(event) {
  event.preventDefault();
  if (!inputValue.value) {
    alert("Please enter Username first");
  } else {
    findProfile(inputValue.value);
  }

  inputValue.value = "";
}

//function for api fetch call
function findProfile(profile) {
  let apiUrl = `https://api.github.com/users/${profile}`;
  axios
    .get(apiUrl)
    .then(renderProfile)
    .catch((error) => {
      alert("User not found! Please enter a valid username.");
    });
}
//function to clear the profile info
/*function clearProfile() {
  document.getElementById("profile-pic").src = "";
  document.getElementById("username-id").innerText = "";
  document.getElementById("handle").innerText = "";
  document.getElementById("date-joined").innerText = "";
  document.getElementById("bio-text").innerText = "";
  document.getElementById("repos").innerText = "0";
  document.getElementById("followers").innerText = "0";
  document.getElementById("following").innerText = "0";
  document.getElementById("city").innerText = "No location provided";
  document.getElementById("link").innerText = "";
  document.getElementById("twitter").innerText = "Not Available";
  document.getElementById("linkedin").innerText = "Not Available";
}*/

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

  profilePic.src = response.data.avatar_url;
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

//changing theme functions
// Changing theme functions
let searchContainer = document.getElementById("search-container");
let devtText = document.getElementById("devtText");
let container = document.getElementById("container");
let reposTotal = document.getElementById("repos");
let followersTotal = document.getElementById("followers");
let followingTotal = document.getElementById("following");
let modeBtn = document.getElementById("mode");
let themeText = document.getElementById("theme-text");
let isDarkmode = false;

modeBtn.addEventListener("click", () => {
  // Toggling the theme
  document.body.classList.toggle("dark-mode");
  // Updating the button icon and tracking theme state
  if (isDarkmode) {
    themeText.innerText = "Dark"; // Change text to "Dark"
    modeBtn.classList.remove("fa-sun");
    modeBtn.classList.add("fa-moon");
    searchContainer.style.backgroundColor = "#1F2A48";
    container.style.backgroundColor = "#1F2A48";
    inputValue.style.backgroundColor = "#1F2A48";
    devtText.style.color = "#a8afbf";
    inputValue.style.color = "#a8afbf";
    container.style.color = "#a8afbf";
    themeText.style.color = "#a8afbf";
    reposTotal.style.color = "white";
    followersTotal.style.color = "white";
    followingTotal.style.color = "white";
    document.querySelector("body").style.backgroundColor = "";
    isDarkmode = false;
  } else {
    themeText.innerText = "Light"; // Change text to "Light"
    modeBtn.classList.remove("fa-moon");
    modeBtn.classList.add("fa-sun");
    searchContainer.style.backgroundColor = "#FEFEFF";
    inputValue.style.backgroundColor = "#FEFEFF";
    inputValue.style.color = "#515559";
    container.style.backgroundColor = "#FEFEFF";
    container.style.color = "black";
    reposTotal.style.color = "#6C6D72";
    followersTotal.style.color = "#6C6D72";
    followingTotal.style.color = "#6C6D72";
    themeText.style.color = "black";
    document.querySelector("body").style.backgroundColor = "#F5F8FF";
    devtText.style.color = "black";
    isDarkmode = true;
  }
});
