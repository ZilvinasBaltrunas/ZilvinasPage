"use strict"

let weight = document.getElementsByClassName("wei")[0];
let height = document.getElementsByClassName("hei")[0];
let heightNumber = 0;
let weightNumber = 0;
let bmi;
let heightImperial = document.getElementById("btnHi");
let heightMetric = document.getElementById("btnHm");
let weightImperial = document.getElementById("btnWi");
let weightMetric = document.getElementById("btnWm");
let male = document.getElementById("male");
let female = document.getElementById("female");

// INPUT FIELDS
height.addEventListener("input", function(){
    countBmi();
});
weight.addEventListener("input", function(){
	countBmi();
});

// BUTTONS
heightImperial.addEventListener("click", function() {
	if (heightImperial.classList.contains("disabled")) {
		heightImperial.classList.add("enabled");
		heightImperial.classList.remove("disabled");
		//
		heightMetric.classList.add("disabled");
		heightMetric.classList.remove("enabled");
		//
		document.getElementsByClassName("cm")[0].innerHTML = "inch";
		countBmi();
	}
});
heightMetric.addEventListener("click", function() {
	if (heightMetric.classList.contains("disabled")) {
		heightMetric.classList.add("enabled");
		heightMetric.classList.remove("disabled");
		//
		heightImperial.classList.add("disabled");
		heightImperial.classList.remove("enabled");
		//
		document.getElementsByClassName("cm")[0].innerHTML = "cm";
		countBmi();
	}
});

weightImperial.addEventListener("click", function() {
	if (weightImperial.classList.contains("disabled")) {
		weightImperial.classList.add("enabled");
		weightImperial.classList.remove("disabled");
		//
		weightMetric.classList.add("disabled");
		weightMetric.classList.remove("enabled");
		//
		document.getElementsByClassName("kg")[0].innerHTML = "lb";
		countBmi();
	}
});
weightMetric.addEventListener("click", function() {
	if (weightMetric.classList.contains("disabled")) {
		weightMetric.classList.add("enabled");
		weightMetric.classList.remove("disabled");
		//
		weightImperial.classList.add("disabled");
		weightImperial.classList.remove("enabled");
		//
		document.getElementsByClassName("kg")[0].innerHTML = "kg";
		countBmi();
	}
});

male.addEventListener("click", function() {
	if (male.classList.contains("disabled")) {
		male.classList.add("enabled");
		male.classList.remove("disabled");
		//
		female.classList.add("disabled");
		female.classList.remove("enabled");
	}
});
female.addEventListener("click", function() {
	if (female.classList.contains("disabled")) {
		female.classList.add("enabled");
		female.classList.remove("disabled");
		//
		male.classList.add("disabled");
		male.classList.remove("enabled");
	}
});

function countBmi() {
	heightNumber = height.value;
	weightNumber = weight.value;

	if (heightImperial.classList.contains("enabled")) {
		heightNumber = height.value * 2.54;
	}
	else if (weightImperial.classList.contains("enabled")) {
		weightNumber = weight.value * 0.45359237;
	}
	bmi = weightNumber/((heightNumber*0.01)*(heightNumber*0.01));
	bmi = bmi.toFixed(1);
	if (bmi > 13.5) {
		displayBmi();
	}
}

function displayBmi () {
	var text = document.createTextNode(bmi);
	document.getElementsByClassName("result")[0].innerHTML = bmi;
	// 13.5 = 0 %   33.5 = 100%
	bmi = bmi - 13.5;
	let scl = bmi*5 - 1;
	if (scl >=100) {
		scl = '99%';
		document.getElementsByClassName("arrow")[0].style.left = scl;
	}
	else {
		scl = scl.toFixed(1)+"%";
		document.getElementsByClassName("arrow")[0].style.left = scl;
	}
}