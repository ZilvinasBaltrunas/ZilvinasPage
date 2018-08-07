//BUTTONS
let bigButton = document.getElementsByClassName('big__button')[0];
let small = document.querySelectorAll('.small__button');
let smallLamps = document.getElementsByClassName('lamps__small-lamp');
let whiteButton = document.querySelectorAll('.white-button');
let sum = 0;
let arrow = document.getElementById('arrow');
//FOR DRAG AND DROP

//VARTIABLES FOR USE
let countBigButtonPushes = 0;

//CONDITIONS TO WIN
let first = false;
let second = false;
let third = false;
let four = false;

//FIRST - BIG BUTTON EVENT
bigButton.addEventListener("click", function() {
	firstStep();
});

function firstStep() {
	countBigButtonPushes += 1;
	if (countBigButtonPushes == 8) {
		countBigButtonPushes = -1;
		first = true;
		document.getElementsByClassName('big__lamp')[0].classList.add("lamp-is-on");
		document.getElementsByClassName('big__lamp')[0].classList.remove("lamp-is-off");
		if ((first)&&(second)&&(third)&&(four)) {
			lookAtTheLock();
		}
	}
	else {
		first = false;
		doNotLookAtTheLock();
		greenRing();
		document.getElementsByClassName('big__lamp')[0].classList.add("lamp-is-off");
		document.getElementsByClassName('big__lamp')[0].classList.remove("lamp-is-on");
	}
}

//FOR EVERY SMALL BUTTON PUSH
for (let i=0; i<small.length; i++){
	small[i].addEventListener("click", function() {
		// console.log('ijungtas ' + (i+1) + ' mygtukas');
		if (small[i].classList.contains('on')) {
			document.getElementsByClassName('small__button')[i].classList.remove("on");
		}
		else {
			document.getElementsByClassName('small__button')[i].classList.add("on");
		}
		smallButtonsForLamps();
		nineSmallButtons();
	});
}

//SECOND - 4 SMALL BUTTONS EVENT
function smallButtonsForLamps() {
	if ( (small[1].classList.contains('on') && small[2].classList.contains('on')) && ( !small[0].classList.contains('on') && !small[3].classList.contains('on') )  ) {
		for (let i = 0; i < smallLamps.length; i++) {
			smallLamps[i].classList.add("lamp-is-on");
			document.getElementsByClassName('suitcase__up__right__circle1')[0].classList.add("rotate1");
			second = true;
			if ((first)&&(second)&&(third)&&(four)) {
				lookAtTheLock();
			}
		}
	}
	else {
		for (let i = 0; i < smallLamps.length; i++) {
			smallLamps[i].classList.remove("lamp-is-on");
			document.getElementsByClassName('suitcase__up__right__circle1')[0].classList.remove("rotate1");
			second = false;
			doNotLookAtTheLock();
			greenRing();
		}
	}
}

//THIRD - 9 SMALL BUTTONS EVENT
function nineSmallButtons() {
	if ( (small[4].classList.contains('on') && small[6].classList.contains('on') && small[10].classList.contains('on') && small[11].classList.contains('on') && small[12].classList.contains('on')) 
			&& ( !small[5].classList.contains('on') && !small[7].classList.contains('on') && !small[8].classList.contains('on') && !small[9].classList.contains('on'))  ) {
				document.getElementsByClassName('suitcase__up__right__circle2')[0].classList.add("rotate2");
				third = true;
				if ((first)&&(second)&&(third)&&(four)) {
					lookAtTheLock();
				}
	}
	else {
		document.getElementsByClassName('suitcase__up__right__circle2')[0].classList.remove("rotate2");
		third = false;
		doNotLookAtTheLock();
		greenRing();
	}
}

//FOR WHITE KEYBOARD PUSH
for (let i=0; i<whiteButton.length; i++) {
	whiteButton[i].addEventListener("click", function() {
		if ((first)&&(second)&&(third)) {
			if (whiteButton[i].classList.contains('white-on')) {
				whiteButton[i].classList.remove("white-on");
				let num = Number(this.getAttribute('data-number'));
				sum -= num; 
			}
			else {
				whiteButton[i].classList.add("white-on");
				let num = Number(this.getAttribute('data-number'));
				sum += num; 
			}			
			
			if (sum == 8) {
				lookAtTheLock();
				four = true;
			}
			else if (sum!=8) {
				doNotLookAtTheLock();
				greenRing();
				four = false;
			}
		}
	})
}

function lookAtTheLock() {
	arrow.addEventListener("click", openQ);
}

function doNotLookAtTheLock() {
	arrow.removeEventListener("click", openQ);
	document.getElementsByClassName('suitcase__up__left__question')[0].classList.remove("question");
}

function openQ() {
	if (document.getElementsByClassName('suitcase__up__left__question')[0].classList.contains('question') && (four) ) {
			document.getElementsByClassName('suitcase__up__left__question')[0].classList.remove("question");
			greenRing();
		}
	else {
		document.getElementsByClassName('suitcase__up__left__question')[0].classList.add("question");
		greenRing();
		
		dragThatKeyToLock();
	}
}

function greenRing() {
	let index = document.getElementsByClassName('suitcase__up__left__question')[0];
	let ifClass = index.classList.contains('question');
	if (ifClass) {
		document.getElementsByClassName('suitcase__up__right__circle2')[0].classList.add("green-border");
	}
	else if (!ifClass) {
		document.getElementsByClassName('suitcase__up__right__circle2')[0].classList.remove("green-border");
	}
}

function dragThatKeyToLock() {
	let lock = document.getElementsByClassName('question')[0];
	let key = document.getElementsByClassName('rotate2')[0];
	let overlap = false;
	key.addEventListener("mousedown", function(e) {

	  function moveKey(e) {
	    let x = e.clientX;
	    let y = e.clientY;
	    
	    key.style.position = 'absolute';
	    key.style.transition = 'none';
	    key.style.left = (x - 85) + 'px';
	    key.style.top = (y - 85) + 'px';
	    
	    let rec = key.getBoundingClientRect();
	    let goalRec = lock.getBoundingClientRect();
	    
	    let t = rec.top;
	    let b = rec.bottom;
	    let r = rec.right;
	    let l = rec.left;

	    let tGoal = goalRec.top;
	    let bGoal = goalRec.bottom;
	    let rGoal = goalRec.right;
	    let lGoal = goalRec.left;

	    if (t >= tGoal && b <= bGoal && l >= lGoal && r <= rGoal) {
	      lock.style.borderColor = "#008000";
	      overlap = true;
	    }
	    else {
	      lock.style.borderColor = "#FF0000";
	      overlap = false;
	    }
	  }

	  moveKey(e);

	  document.addEventListener('mousemove', moveKey);

	  key.addEventListener('mouseup', function() {
	    if (overlap == true) {
	    	let str = "TU LAIMĖJAI !!!";
			document.styleSheets[0].addRule('div.rotate1:after','content: "'+str+'";');
	    }
	    document.removeEventListener('mousemove', moveKey);
	    if (overlap == false) {
	    	key.style.position = '';
	    }
	  })
	});
}