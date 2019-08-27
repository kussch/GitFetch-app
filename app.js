const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const locContainer = document.querySelector(".main__profile-location");
const avaContainer = document.querySelector(".main__profile-avatar");

const client_id = ""; 
const client_secret = "";

const fetchUsers = async (user) => {
	const api_call = await fetch(`http://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

	const data = await api_call.json();
	return { data }
};

const showData = () => {
	fetchUsers(inputValue.value).then((res) => {
		console.log(res);

		nameContainer.innerHTML = `<b>Name:</b> <span class="main__profile-value">${res.data.name}</span>`;

		unContainer.innerHTML = `<b>Username</b>: <span class="main__profile-value">${res.data.login}</span>`;

		reposContainer.innerHTML = `<b>Repos</b>: <span class="main__profile-value">${res.data.public_repos}</span>`;

		urlContainer.innerHTML = `<b>URL</b>: <span class="main__profile-value">${res.data.html_url}</span>`;

		locContainer.innerHTML = `<b>Location</b>: <span class="main__profile-value">${res.data.location}</span>`;

		avaContainer.innerHTML = `<b>Avatar</b>: <span class="main__profile-value"><img src=${res.data.avatar_url}></img></span>`;
	});
}

searchButton.addEventListener("click", () => {
 showData();
});
