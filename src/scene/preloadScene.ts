export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'public/img/phaser-logo.png')
  }

  create() {
    this.scene.start('MainScene')
  }
}
