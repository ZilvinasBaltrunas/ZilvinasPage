let storage = localStorage;
let storageTasks = [];
let storageLogic = [];// sitas irgi reikalingas doneTaskListui
let inputField = document.getElementsByClassName('input')[0];
let inputButton = document.getElementsByClassName('button')[0];
let checkButton = document.getElementsByClassName('chk')[0];
let removeButton = document.getElementsByClassName('rmv')[0];

let text;
let str;
let quantity = 0;
let fullElement;
let bird = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 59"><path class="changeColor" d="M52 21a1 1 0 0 0-1 1v32H2V5h49v1a1 1 0 1 0 2 0V3H0v53h53V22a1 1 0 0 0-1-1z"/><path class="changeColor" d="M58.707 7.293a.999.999 0 0 0-1.414 0L27 37.586l-13.07-13.07a.999.999 0 1 0-1.414 1.414l13.777 13.777a.997.997 0 0 0 1.414 0l31-31a.999.999 0 0 0 0-1.414z"/></svg>';
let bin = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.4 486.4"><path d="M446 70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5 0-53.5 24-53.5 53.5V70H40.4c-7.5 0-13.5 6-13.5 13.5S32.9 97 40.4 97h24.4v317.2c0 39.8 32.4 72.2 72.2 72.2h212.4c39.8 0 72.2-32.4 72.2-72.2V97H446c7.5 0 13.5-6 13.5-13.5S453.5 70 446 70zM168.6 53.5c0-14.6 11.9-26.5 26.5-26.5h96.2c14.6 0 26.5 11.9 26.5 26.5V70H168.6V53.5zm226 360.7c0 24.9-20.3 45.2-45.2 45.2H137c-24.9 0-45.2-20.3-45.2-45.2V97h302.9v317.2h-.1z"/><path class="changeColor" d="M243.2 411c7.5 0 13.5-6 13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v238.5c0 7.5 6 13.6 13.5 13.6zM155.1 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9c0 7.5 6.1 13.5 13.5 13.5zM331.3 396.1c7.5 0 13.5-6 13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v208.9c0 7.5 6 13.5 13.5 13.5z"/></svg>';
let myId;
let itemToDelete;
let deleteButtons;
let allMembers;

let tskList = document.getElementsByClassName('task-list');

window.onload = function(){
	if (storage.getItem("my-tasks")) {
		str = storage.getItem("my-tasks");
		storageTasks = str.split(',');
		storageLogic = str.split(','); // sitas irgi reikalingas doneTaskListui
		displayElements();
	}
	inputButton.addEventListener('click', function() {
		addTaskToTaskList();
	});
}

function addTaskToTaskList() {
	//PUSH TO STORAGE
	text = inputField.value;
	storageTasks.push(text);
	storageTasks.push(true);// sitas irgi reikalingas doneTaskListui
	storage.setItem("my-tasks", storageTasks);
	storage.setItem("my-logic", storageLogic); // sitas irgi reikalingas doneTaskListui
	if (text != "") {
		creatingElement(text, true);
	}

	inputField.value = "";
	inputField.focus();
}

function creatingElement(txt, todo) {
	let liElement = document.createElement("li");
	liElement.classList.add('tsk');
	if (todo) {
		liElement.classList.add('task');
	}
	
		document.getElementsByClassName('task-list')[0].appendChild(liElement);
		let pElement = document.createElement("p");
		pElement.classList.add('text');
		liElement.appendChild(pElement);
			let textOne = document.createTextNode(txt);
		    pElement.appendChild(textOne);
		let divElement = document.createElement("div");
		divElement.classList.add('right');
		liElement.appendChild(divElement);
			let firstButton = document.createElement("button");
			let secondButton = document.createElement("button");
			firstButton.classList.add('chk');
			firstButton.addEventListener('click', function() {// local storage reikia ideti true / false
				addTasksToDoneList();
				document.getElementsByClassName('made-tasks')[0].appendChild(this.parentNode.parentNode);//
			})//
			if (todo) {
				firstButton.classList.add('check-button');
				secondButton.classList.add('remove');
			}
			divElement.appendChild(firstButton);
				firstButton.innerHTML = bird;
			secondButton.classList.add('rmv');
			divElement.appendChild(secondButton);
				secondButton.innerHTML = bin;
			//DELETE listener
			secondButton.addEventListener('click', function() {
	  			myId = this.parentNode.parentNode.getAttribute("id");
	  			deleteMe(myId);
			})
	addId();
}

function displayElements() {
	quantity = storageTasks.length;
	for (let i=0; i<quantity; i++) {
		if (storageTasks[i]!= "") { 
			txt = storageTasks[i];
			creatingElement(txt, true);
		}
	}
}

function addId() {
	allMembers = document.getElementsByClassName('tsk');
	for (let i=0; i<allMembers.length; i++) {
		allMembers[i].setAttribute('id', i);
	}
}

function deleteMe(myId) {
	deleteButtons = document.getElementsByClassName('tsk');
	for (let i=0; i<deleteButtons.length; i++) {
		if (i == myId) {
			itemToDelete = document.getElementById(myId);
			itemToDelete.parentNode.removeChild(itemToDelete);
			storageTasks.splice(i, 1);
			addId();
			storage.setItem("my-tasks", storageTasks);//
		}
	}
}

function addTasksToDoneList() {
	//
}