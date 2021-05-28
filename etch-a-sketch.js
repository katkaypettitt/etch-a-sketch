/* Select elements on the page */
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 35;

/* Setup canvas for drawing */

// Same as const width = canvas.width; and const height = canvas.height;
const { width, height } = canvas;

// Randomize starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

/* Draw function */
function draw({ key }) {
  // Increment the hue
  hue += 20;
  ctx.strokeStyle = `hsl(${Math.random() * 360},100%, 50%)`;

  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
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
