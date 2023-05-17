import { InputHandler } from "./input-handler.js";
import { Key } from "./input-handler.js";
export class Player {
  sourceX = 0;
  sourceY = 0;

  destinationX = 25;
  destinationY = 100;

  fps = 1000 / 12; // cadance - 12 frame par seconde
  framesLenght = 2; //nombre de frames  dans la ligne de la spritesheet
  frameIndex = 0;
  speed = 3; //300px/s

  /**
   * Description
   * @param {Game} game
   */

  constructor(game) {
    this.image = new Image();
    this.image.src = "./assets/img/player-spritesheet.png";
    this.ctx = game.ctx;
    this.inputKeys = game.inputHandler.keys;
    this.framewidth = 222;
    this.frameheight = 247;

    const { canvas } = game;
    this.maxDestinationX = canvas.width - this.frameWidth;
    this.maxDestinationY = canvas.width - this.frameHeight;
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
   */

  update(timeStamp) {
    const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLenght;
    this.sourceX = frameIndex * this.framewidth;
    //console.log(this.inputKeys);
    if (this.inputKeys.has(Key.ArrowUp)) this.destinationY -= this.speed;
    if (this.inputKeys.has(Key.ArrowRight)) this.destinationX += this.speed;
    if (this.inputKeys.has(Key.ArrowDown)) this.destinationY += this.speed;
    if (this.inputKeys.has(Key.ArrowLeft)) this.destinationX -= this.speed;

    if (this.destinationY < 0) this.destinationY = 0;
    if (this.destinationX < 0) this.destinationX = 0;
    if (this.destinationY > this.maxDestinationY)
      this.destinationY = this.maxDestinationY;
    if (this.destinationX > this.maxDestinationX)
      this.destinationX = this.maxDestinationX;
  }
}
