let date;
let time;
let deadline;
let button = document.getElementById('button');
let timeinterval;
let stop = document.getElementById('stop');

function onSubmitButton() {

  date = document.getElementById('date').value;
  time = document.getElementById('time').value;
  deadline = date + ' ' + time + ' GMT+2';
  initializeClock('clock', deadline);
}

button.addEventListener('click', function(e) {
  clearInterval(timeinterval);
  e.preventDefault();
  onSubmitButton();
})

stop.addEventListener('click', function() {
  clearInterval(timeinterval);
})

// Funkcija grąžinanti objektą turintį apskaičiuotą laiko skirtumą dienomis, valandomis ir sekundėmis
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()); // Milisekundžių skirtumas tarp duotos ir dabartinės datos
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {

  // HTML elementai
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  // Funkcija leidžiama kas sekundę
  function updateClock() {

    let t = getTimeRemaining(endtime); // Kintamasis 't' yra returnintas objektas iš funkcijos

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);         //
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);     //  Su slice(-2) paimami paskutiniai du skaiciai
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);     //

    // Jeigu laikas pasibaigė, nebeleisti funkcijos
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
}