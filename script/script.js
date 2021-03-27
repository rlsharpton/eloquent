
const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const paragraph = document.querySelector('p');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function pyramid(i) {
  for(n = 0; n < i;n++) {
  console.log('#');
  console.log(`I is: ${i} N is: ${n}`);
  document.querySelector('P')
  }
}

function draw() {
  for(i = 0; i < 8; i++){
    pyramid(i);
  }
}

btn.addEventListener('click', draw);