// basic canvas
/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("tutorial");

// const init = () => {
//   window.requestAnimationFrame(draw);
// };

let stopInterval;
let callCount = 0;

const draw = () => {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(30, 30, 25, 0, Math.PI * 2, true);
    ctx.translate(55, 0);
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 0, 0, 0.8)";
    ctx.stroke();
  } else {
    // canvas-unsupported code here
  }
  callCount += 1;
  console.log(callCount);
};

const startDrawing = () => {
  stopInterval = setInterval(draw, 1000);
};

const stopDrawing = () => {
  clearInterval(stopInterval);
};
