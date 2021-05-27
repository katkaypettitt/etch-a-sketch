/* Select elements on the page */
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

/* Setup canvas for drawing */

// Same as const width = canvas.width; and const height = canvas.height;
const { width, height } = canvas;

// Randomize starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

/* Draw function */
function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  x -= MOVE_AMOUNT;
  y -= MOVE_AMOUNT;
  ctx.lineTo(x, y);
  ctx.stroke();
}

/* Handler for keys */
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

/* Clear/shake function */

/* Listen for arrow keys */
window.addEventListener('keydown', handleKey);
