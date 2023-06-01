class Player {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.rect(this.x, this.y, this.w, this.h);
        c.fill();
    }
}