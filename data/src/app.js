let playerStatus = {
    str: 1,
    agi: 1,
    dex: 1,
    vit: 1,
    luk: 1
}

class App extends Phaser.Scene {
    constructor() {
        super({ key: "app" });
    }

    preload() {
        this.load.image('back_button', '../assets/back_button.png');
    }

    create(){
        this.registry.set('playerStatus', playerStatus);
        this.scene.start('menu');
    }
}

let config = new Phaser.Game({
    width: 1280,
    height: 720,
    scene: [App, Menu, NewChar, Dialog],
    scale : {
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: "arcade",
        arcade: {
            y: 200
        }
    }
});