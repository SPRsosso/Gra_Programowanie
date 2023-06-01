class Scientist {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.velocity = {x: 0, y: 0};
    }

    update() {
        // Gravity
        this.velocity.y += gravity;

        if ((this.y + this.h) + this.velocity.y < innerHeight)
            this.y += this.velocity.y;
        else
            this.velocity.y = 0;
        
        // Movement
        if (movement.RIGHT && this.velocity.x < movementSpeed)
            this.velocity.x += movementSpeed;
        if (movement.LEFT && this.velocity.x > -movementSpeed)
            this.velocity.x -= movementSpeed;
        
        this.x += this.velocity.x;
        this.velocity.x = 0;
    }

    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.rect(this.x, this.y, this.w, this.h);
        c.fill();
    }
}