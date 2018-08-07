let data;
let button = document.getElementsByClassName("button")[0];
let input;
let url;

let name = document.getElementsByClassName("name")[0];
let humidity = document.getElementsByClassName("humidity")[0];
let pressure = document.getElementsByClassName("pressure")[0];
let temperature = document.getElementsByClassName("temperature")[0];
let windDeg = document.getElementsByClassName("windDeg")[0];
let windSpeed = document.getElementsByClassName("windSpeed")[0];
let icon = document.getElementsByClassName("icon")[0];

let storage = localStorage;
let city;

window.onload = function() {
	button.addEventListener('click', function(){
		input = document.getElementsByClassName('input')[0].value;
		getWeather();

	});
	city = storage.getItem('city');
	if (storage.city) {
		input = storage.city;
		getWeather();
	}
}

function getWeather() {

	url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&APPID=80e69a50ab15f48fcf62cf250d5e064a&units=metric";
	storage.city = input;
	let http = new XMLHttpRequest();
	
	http.onload = function() {
		if (http.status == 200) {
			data = JSON.parse(http.response);
			console.log(data);
			name.innerHTML = data.name;
			humidity.innerHTML = data.main.humidity;
			pressure.innerHTML = data.main.pressure;
			temperature.innerHTML = data.main.temp;
			windDeg.innerHTML = data.wind.deg;
			windSpeed.innerHTML = data.wind.speed;
			icon.style.backgroundImage = `url('http://openweathermap.org/img/w/${data.weather[0].icon}.png')`;
		}
	}
	http.open("GET", url);
	http.send();
}