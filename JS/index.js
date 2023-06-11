canvas.width = innerWidth;
canvas.height = innerHeight;

let player1 = new Player(20, (innerHeight / 2) - (playerHeight / 2), playerWidth, playerHeight);
let player2 = new Player(innerWidth - (20 + playerWidth), (innerHeight / 2) - (playerHeight / 2), playerWidth, playerHeight);
let ball = new Ball((innerWidth / 2) - (ballRadius / 2), (innerHeight / 2) - (ballRadius / 2), ballRadius);

c.fillStyle = "black";
c.fillRect(0, 0, innerWidth, innerHeight);


// Game loop
let game = setInterval(() => {
    c.fillStyle = "rgba(0, 0, 0, 0.2)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    // Player 1 movement
    if (player1Movement.UP && player1.y > 0)
        player1.y -= speed;
    else if (player1Movement.DOWN && player1.y + player2.h < innerHeight)
        player1.y += speed;

    // Player 2 movement
    if (player2Movement.UP && player2.y > 0)
        player2.y -= speed;
    else if (player2Movement.DOWN && player2.y + player2.h < innerHeight)
        player2.y += speed;
    
    player1.draw();
    player2.draw();

    //
    // Ball physics
    // 
    ball.update(player1, player2);
    ball.draw();

    scoreP1Box.innerHTML = scoreP1;
    scoreP2Box.innerHTML = scoreP2;
}, fps);


// Movement listeners
addEventListener("keydown", e => {
    if (e.key == "w")
        player1Movement[UP] = UP;
    else if (e.key == "s")
        player1Movement[DOWN] = DOWN;
    
    if (e.key == "ArrowUp")
        player2Movement[UP] = UP;
    else if (e.key == "ArrowDown")
        player2Movement[DOWN] = DOWN;
})

addEventListener("keyup", e => {
    if (e.key == "w")
        delete player1Movement.UP;
    else if (e.key == "s")
        delete player1Movement.DOWN;

    if (e.key == "ArrowUp")
        delete player2Movement.UP;
    else if (e.key == "ArrowDown")
        delete player2Movement.DOWN;
})