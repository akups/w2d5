function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}

class Game {
  constructor() {
    console.log("GAME CONSTRUCTOR");
    this.obstacles = [];
    this.coinFrames = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();

    for (let i = 0; i < 5; i++) {
      this.coinFrames.push(loadImage("assets/coins/tile00" + i + ".png"));
    }
    /* this.coinFrames = [
      loadImage("assets/coins/tile000.png"),
      loadImage("assets/coins/tile001.png"),
      loadImage("assets/coins/tile002.png"),
      loadImage("assets/coins/tile003.png"),
      loadImage("assets/coins/tile004.png")
    ];
    It is better to attain this with a for loop*/
  }

  draw() {
    this.background.draw();

    // create a new obstacle every 2 seconds
    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles = this.obstacles.filter(
      function(obstacle) {
        if (
          !obstacle.collides(this.player) &&
          obstacle.x + obstacle.width >= 0
        ) {
          return true;
        }
      }.bind(this)
    );

    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });

    this.player.draw();
  }

  setup() {
    this.player.setup();
  }
}

const game = new Game();

function preload() {
  console.log("PRELOAD");
  game.init();
}

function setup() {
  // createCanvas(width, height)
  createCanvas(384, 216); // to match the bg images dimensions
  game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
