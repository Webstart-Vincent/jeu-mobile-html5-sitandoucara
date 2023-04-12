export class Player {
  destinationX = 0;
  destinationY = 0;
  Sourcewidth = 324;
  Sourceheight = 360;
  speed = 100; //300px/s 

  /**
   * Description
   * @param {CanvasRenderingContext2D} ctx
   */

  constructor(ctx) {
    this.image = new Image();
    this.image.src = "./assets/img/player-spritesheet.jpg";
    this.ctx = ctx;
  }
}
