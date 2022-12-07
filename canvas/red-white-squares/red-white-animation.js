document.getElementById("square").style.backgroundColor = "red";
document.getElementById("square").style.border = "2px solid black";
const c = document.getElementById("square");
const ctx = c.getContext("2d");

const repaint = () => {
  document.getElementById("square").style.backgroundColor = "white";
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillRect(400, 0, 200, 200);
  ctx.fillRect(200, 200, 200, 200);
  ctx.fillRect(600, 200, 200, 200);
};

const draw = () => {
  document.getElementById("square").style.backgroundColor = "red";
  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.lineTo(800, 200);
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 400);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 400);
  ctx.moveTo(600, 0);
  ctx.lineTo(600, 400);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillRect(400, 0, 200, 200);
  ctx.fillRect(200, 200, 200, 200);
  ctx.fillRect(600, 200, 200, 200);
  ctx.save();
};

setInterval(() => {
  draw();
}, 1000);

setInterval(() => {
  repaint();
}, 2000);
