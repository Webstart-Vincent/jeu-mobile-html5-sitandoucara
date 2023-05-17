import { Game } from "./game.js";

export class BananaSkin {
  sourceX = 0;
  sourceY = 0;
  destinationX = 25;
  destinationY = 100;

  fps = 1000 / 12; // cadance - 12 frame par seconde
  framesLenght = 2; //nombre de frames  dans la ligne de la spritesheet
  frameIndex = 0;

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
    this.canvasHeigth = canvas.heigth;

    this.frameWidth = 135;
    this.frameHeight = 122;

    this.reset();
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.framewidth, //cadrage dans la source - fichier.png
      this.frameheight, //cadrage dans la source
      this.destinationX,
      this.destinationY,
      this.framewidth, //dimension dans la destination - canvas
      this.frameheight //dimension dans la destination
    );
  }

  /**
   * Description
   * @param {number} timeStamp
   * @param {number} deltaTime
   */

  update(timeStamp, deltaTime) {
    const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLenght;
    this.sourceX = frameIndex * this.framewidth;

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
