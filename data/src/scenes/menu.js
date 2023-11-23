class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "menu" });
    }

    create() {
        const title = this.add.text(640, 150, 'lilHero', { font: "48px Arial" });
        const startBtn = this.add.text(640, 360, 'Começar', { font: "36px Arial" });

        title.setOrigin(0.5, 0.5);

        startBtn.setOrigin(0.5, 0.5);
        startBtn.setInteractive();
        startBtn.on('pointerdown', () => {
            this.scene.start('newChar');
        })
    }
}