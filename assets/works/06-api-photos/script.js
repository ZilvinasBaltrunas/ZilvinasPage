let url = 'https://randomuser.me/api/?results=20';
let button = document.getElementById("button");
let data;
let list = document.getElementsByClassName('list')[0];
let photo;

button.addEventListener('click', getUsers);

function getUsers() {
	let http = new XMLHttpRequest();
	
	http.onload = function() {
		if (http.status == 200) {
			data = JSON.parse(http.response);
			
			for (let i=0; i<data.results.length; i++) {
				photo = document.createElement("div");
				photo.classList.add('photo');
				list.appendChild(photo);
				photo.style.backgroundImage = "url('" + data.results[i].picture.large + "')";
			}
		}
	}
	http.open("GET", url);
	http.send();
}