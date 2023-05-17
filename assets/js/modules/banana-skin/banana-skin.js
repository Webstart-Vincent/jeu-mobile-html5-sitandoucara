import { Game } from "../game.js";

export class BananaSkin {
  sourceX = 0;
  sourceY = 0;
  destinationX = 25;
  destinationY = 100;

  fps = 1000 / 12; // cadance - 12 frame par seconde
  framesLenght = 2; //nombre de frames  dans la ligne de la spritesheet

  /**
   * Description
   * @param {Game} game
   */

  constructor(game) {
    this.image = new Image();
    this.image.src = "./assets/img/enney1.png";

    this.ctx = game.ctx;

    const { canvas } = game;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.frameWidth = 135;
    this.frameHeight = 122;

    this.reset();
  }

  render = (timeStamp, deltaTime) => {
    this.draw();
    this.update(timeStamp, deltaTime);
  };

  draw() {
    console.log(this.destinationY);
    this.ctx.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.frameWidth, //dimension dans la destination - canvas
      this.frameHeight,
      this.destinationX,
      this.destinationY,
      this.frameWidth, //dimension dans la destination - canvas
      this.frameHeight
    );
  }

  /**
   * Description
   * @param {number} timeStamp
   * @param {number} deltaTime
   */

  update(timeStamp, deltaTime) {
    const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLenght;
    this.sourceX = frameIndex * this.frameWidth;

    //casi-meme code background
    this.destinationX -= (deltaTime * this.speed) / 1000;
    if (this.destinationX <= -this.frameWidth) this.isActive = false;
  }

  reset = () => {
    this.isActive = true;
    this.destinationX = this.canvasWidth;
    this.destinationY = Math.random() * (this.canvasHeigth - this.frameHeight);
    this.speed = Math.random() * 50 + 100;
  };
}
