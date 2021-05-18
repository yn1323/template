export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'public/img/phaser-logo.png')
    this.load.on('progress', (value: number) => {
      console.log(value)
    })

    this.load.on('fileprogress', (file: any) => {
      console.log(file.src)
    })

    this.load.on('complete', () => {
      console.log('complete')
    })
  }

  create() {
    this.scene.start('MainScene')
  }
}
