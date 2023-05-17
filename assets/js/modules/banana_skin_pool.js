import { Game } from "./game.js";
import { BananaSkin } from "./banana_skin.js";

export class BananaSkinPool {
  /**
   *
   * @param {Game} game
   */

  constructor(game) {
    /** @type {BananaSkin[]} */
    this.BananaSkin = [];
    this.resetTimer();
  }

  resetTimer = () => {
    this.timer = 0;
    this.nexTime = Math.random() * 500 + 1500; //
  };
  /**
   *
   * @param {number} deltatime
   */
  render = (deltatime) => {
    if (this.timer >= this.nexTime) {
      this.activateNewBananaSkin();
      this.resetTimer;
    } else {
      this.timer += deltatime;
    }
    for (const activateNewBananaSkin of this.BananaSkin.filter(
      (bs) => bs.isActive
    ))
      this.activateNewBananaSkin.render();
  };

  activateNewBananaSkin = () => {
    const BananaSkin = this.BananaSkin.find((bs) => !bs.isActive);
    if (BananaSkin) BananaSkin.reset();
    else this.BananaSkin.push(new BananaSkin(this.game));
  };
}
