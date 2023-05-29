const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

const frames = 60;
const fps = 1000 / frames;

let gameLoop = setInterval(() => {
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
}, fps);