class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "menu" });
    }

    create() {
        this.title = this.add.text(640, 150, 'lilHero', { font: "48px Arial" });
        this.title.setOrigin(0.5, 0.5);

        this.startBtn = this.add.text(640, 360, 'Começar', { font: "36px Arial" });
        this.startBtn.setOrigin(0.5, 0.5);
        this.startBtn.setInteractive();
        this.startBtn.on('pointerdown', () => {
            //Adicionar o caminho para próxima tela
        })
    }
}