let block = document.querySelector('.block');
let x;
let y;
let clickedMouse = false;

block.addEventListener("mousedown", function() {
  clickedMouse = true;
});

block.addEventListener("mouseup", function() {
  clickedMouse = false;
})

window.addEventListener("mousemove", function(e) {
  if (clickedMouse) {
    x = e.clientX;
    y = e.clientY;
    block.style.left = (x - 75) + 'px';
    block.style.top = (y - 75) + 'px';
  }
});