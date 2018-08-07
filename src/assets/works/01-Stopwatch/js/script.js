'use strict';

/*************************************
	Variables init
**************************************/
var interval;
var clock = {
	'time': {
		hours: 0,
		minutes: 0,
		seconds: 0,
		miliseconds: 0
	}
}

/*************************************
		Main method
**************************************/
function timeToDegree(time, max) {
	return time*360/max;
}

function chrono() {
	clock.time.miliseconds++;
	
	if(clock.time.miliseconds == 100) {
		clock.time.miliseconds = 0;
		clock.time.seconds++;
	}

	if(clock.time.seconds == 60) {
		clock.time.seconds = 0;
		clock.time.minutes++;
	}

	if(clock.time.minutes == 60) {
		clock.time.minutes = 0;
		clock.time.hours++;
	}
	
	var miliseconds = document.querySelector('#clock .hundredth'),
		seconds = document.querySelector('#clock .seconds'),
		minutes = document.querySelector('#clock .minutes');

		miliseconds.style.transform = 'rotate(' + timeToDegree(clock.time.miliseconds, 100) + 'deg)';
		seconds.style.transform = 'rotate(' + timeToDegree(clock.time.seconds, 60) + 'deg)';
		minutes.style.transform = 'rotate(' + timeToDegree(clock.time.minutes, 60) + 'deg)';
	console.log(timeToDegree(clock.time.miliseconds, 100));
}


function onClickToggleStartPause() {
	console.log(this); //clicked element HTML

	if(this.id == 'start') {
		//ijungti chronometra pradesiu intervala - vykdys funkcija kas kazkiek tai laiko
		interval = window.setInterval(chrono, 10);

		this.id = 'pause'; //element ID
	// console.log(this); 'this' paima id=start
		this.textContent = 'Pause';
	// paima butent ta mygtuka. greitesnis nei querySelector. paima mygtuka be paieskos html kode.
	} else {
		//Pausing chronometer
		clearInterval(interval); //sustabdo intervala

		this.id = 'start';
		this.textContent = 'Start';
	}
}

function onClickResetTimer() {
	clearTimeout(interval); //istrina intervala
	var miliseconds = document.querySelector('#clock .hundredth'),
		seconds = document.querySelector('#clock .seconds'),
		minutes = document.querySelector('#clock .minutes');

		miliseconds.style.transform = 'rotate(0deg)';
		seconds.style.transform = 'rotate(0deg)';
		minutes.style.transform = 'rotate(0deg)';

		clock.time.minutes = 0;
		clock.time.miliseconds = 0;
		clock.time.seconds = 0;
		
		var button = document.querySelector('#pause');
		button.id = 'start';
		button.textContent = 'Start';
}

/*************************************
			Boot
**************************************/
document.addEventListener('DOMContentLoaded', function() {

	document.querySelector('#reset').addEventListener('click', onClickResetTimer);
	document.querySelector('#start').addEventListener('click', onClickToggleStartPause);
});