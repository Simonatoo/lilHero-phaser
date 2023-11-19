class App extends Phaser.Scene {
    constructor() {
        super({ key: "app" });
    }

    preload() {
        
    }
}

let config = new Phaser.Game({
    width: 1280,
    height: 720,
    scene: [App],
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