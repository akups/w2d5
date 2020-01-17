class Player {
  constructor() {
    this.img = loadImage("assets/player/run.gif");
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;

    this.x = 50;
    this.y = height - this.height;

    this.originY = this.y;
  }

  draw() {
    this.velocity += this.gravity; // over time, the velocity increases
    this.y += this.velocity; // if the velocity is a positive number, y will increment (player fall), if the velocity is a negative number, y will decrement (player rise)

    if (this.y >= this.originY) {
      this.y = this.originY;
      this.jumpCount = 0;
    }

    // console.log("velocity: ", this.velocity);
    // console.log("y: ", this.y);

    // rect(this.x, this.y, this.width, this.height);
    image(this.img, this.x, this.y);
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = -6;
      this.jumpCount += 1;
    }
  }
}
