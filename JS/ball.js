class Ball {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = 5;
      this.dy = 5;
    }
    update(player1, player2) {
        this.x += this.dx;
        this.y += this.dy;
    
        // Odbicie od ścian gry
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
    
        // Sprawdzenie kolizji z paletkami
        if (
          this.x - this.radius < player1.x + player1.width &&
          this.y + this.radius > player1.y &&
          this.y - this.radius < player1.y + player1.height
        ) {
          this.dx = -this.dx;
        } else if (
          this.x + this.radius > player2.x &&
          this.y + this.radius > player2.y &&
          this.y - this.radius < player2.y + player2.height
        ) {
          this.dx = -this.dx;
        }
    
        // Sprawdzenie czy piłka przekroczyła boczną krawędź gry
        if (this.x + this.radius > innerWidth) {
          scoreP1++;
          this.reset();
        } else if (this.x - this.radius < 0) {
          scoreP2++;
          this.reset();
        }
      }
    
    reset() {
        this.x = innerWidth / 2 - this.radius / 2;
        this.y = innerHeight / 2 - this.radius / 2;
        this.dx = -this.dx;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = "white";
        c.fill();
        c.closePath();
      }
}