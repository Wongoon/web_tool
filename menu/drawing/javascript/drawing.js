const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('color');
const range = document.getElementById('Range');
const mode = document.getElementById('fill');
const save = document.getElementById('save');
const deleteBtn = document.getElementById('delete');


const INITIAL_COLOR = '#000000';
const CANVAS_SIZE = 700;

ctx.strokeStyle = '#2c2c2c';

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function ColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function RangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
  }

function ModeClick() {
 if (filling === true) {
   filling = false;
   mode.innerText = "Fill";
 } else {
  filling = true;
  mode.innerText = "Paint";  
 }
}

function CanvasClick() {
    if (filling) {
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  }

function CM(event) {
   event.preventDefault();
 }

function SaveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]";
  link.click();
}

function DeleteClick(){
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", CanvasClick);
    canvas.addEventListener("contextmenu", CM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", ColorClick)
);

if (range) {
    range.addEventListener("input", RangeChange);
}
  
if (mode) {
    mode.addEventListener("click", ModeClick);
}

if (save){
  save.addEventListener("click", SaveClick);
}

if (deleteBtn){
    deleteBtn.addEventListener("click", DeleteClick);
}