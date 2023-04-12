export class Player {
  sourceX = 0;
  sourceY = 0;
  framewidth = 222;
  frameheight = 247;

  destinationX = 25;
  destinationY = 100;

  fps = 1000 / 12; // cadance - 12 frame par seconde
  framesLenght = 2; //nombre de frames  dans la ligne de la spritesheet
  frameIndex = 0;
  speed = 100; //300px/s

  /**
   * Description
   * @param {CanvasRenderingContext2D} ctx
   */

  constructor(ctx) {
    this.image = new Image();
    this.image.src = "./assets/img/player-spritesheet.png";
    this.ctx = ctx;
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
  }
}
