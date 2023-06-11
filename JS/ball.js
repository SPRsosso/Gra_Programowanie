class Ball {
    constructor (x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fill();
    }
}