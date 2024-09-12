# GitHub Profile Search - README

## Overview

The **GitHub Profile Search** application allows users to search for GitHub profiles by username. It fetches data from the GitHub API and displays key profile information, such as the user's avatar, bio, number of repositories, followers, and more. Additionally, the application includes a dark/light theme toggle feature for enhanced user experience.

## Features

- **Search GitHub Profiles**: Enter a GitHub username to fetch and display profile details.
- **Profile Information Display**: Show key profile details, such as:
  - Username and handle
  - Bio
  - Number of public repositories
  - Followers and following counts
  - Location, Twitter handle, and personal website
- **Theme Toggle**: Switch between dark and light mode to change the application's appearance.
  
## Technologies Used

- **HTML5** for the structure of the application.
- **CSS3** for styling, including light and dark mode themes.
- **JavaScript** for the logic to handle API requests, rendering of profile data, and theme switching.
- **GitHub API** to fetch profile data.
- **Axios** for making HTTP requests to the GitHub API.
- **FontAwesome** for icons.

## How to Use

1. **Search for a Profile**:
   - Enter a GitHub username in the input field.
   - Click the "Search" button to fetch and display the profile details.
   - The profile information, including username, avatar, bio, location, and social links, will be displayed below the search box.
   
2. **Toggle Dark/Light Theme**:
   - Click the icon in the top-right corner to toggle between dark and light themes.
   - In dark mode, the application will have a darker background with lighter text, while in light mode, it will have a lighter background and darker text.

## Files

1. **index.html**: The main HTML file containing the structure of the application.
2. **style.css**: The CSS file for styling the application, including variables for color themes and layout styling.
3. **app.js**: The JavaScript file handling:
   - Searching GitHub profiles via the GitHub API.
   - Rendering profile data.
   - Toggling between light and dark themes.

## Installation and Setup

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/BuhleMtshali/github-profile-search.git
   ```
2. Open the `index.html` file in your browser.

No build tools or package managers are required for this project, as it is a standalone HTML, CSS, and JavaScript application.

## Dependencies

The project uses the following external libraries:
- **Axios**: A promise-based HTTP client for making API requests. [Axios CDN](https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js)
- **FontAwesome**: Provides the icons used for the theme toggle and profile details. [FontAwesome Kit](https://kit.fontawesome.com/47ef0eeb2e.js)

## GitHub API Rate Limits

Please note that the GitHub API enforces rate limits for unauthenticated requests. You may encounter issues if you exceed the API rate limit. To avoid this, you can authenticate with the GitHub API by generating a personal access token.



---

Feel free to contribute by submitting a pull request or opening an issue if you have suggestions or find bugs!
