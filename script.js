let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.moveTo(0, 50, 200, 200);
ctx.lineTo(50, 0, 200, 200);
ctx.lineTo(100, 50, 200, 200);
ctx.lineTo(0, 50, 200, 200);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "silver";

ctx.beginPath();
ctx.rect(0, 52, 100, 100);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(35, 122, 30, 50);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();







