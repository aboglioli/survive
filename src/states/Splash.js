import Phaser from 'phaser';
import {
  centerGameObjects
} from '../utils';

import loadSprites from '../SpriteLoader';

export default class extends Phaser.State {
  init() {}

  preload() {
    // loader bar
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game
      .world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game
      .world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);

    // load assets
    loadSprites((name, file) => {
      this.load.spritesheet(name, file);
    });
  }

  create() {
    this.state.start('Game');
  }

}
