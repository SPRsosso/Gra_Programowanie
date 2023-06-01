canvas.height = innerHeight;
canvas.width = innerWidth;

const scientist = new Scientist(40, 700, 30, 70);

let gameLoop = setInterval(() => {
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    scientist.update();
    scientist.draw();

    console.log(movement);
}, fps);

addEventListener("keydown", e => {
    if (e.key == "d")
        movement[RIGHT] = RIGHT;
    else if (e.key == "a")
        movement[LEFT] = LEFT;
})

addEventListener("keyup", e => {
    if (e.key == "d")
        delete movement.RIGHT;
    else if (e.key == "a")
        delete movement.LEFT;
})