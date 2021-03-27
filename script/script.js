
const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function pyramid() {
  console.log('#');
}

function draw() {
n = 0;
for(i = 1; i < 8; i++){
  do {
    pyramid();
    console.log(`I is: ${i} and N is: ${n}`);
    n++;
  } while(n < i)
}
}

btn.addEventListener('click', draw);