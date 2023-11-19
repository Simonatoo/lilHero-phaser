class Dialog extends Phaser.Scene {
    constructor() {
        super({ key: "dialog" });
    }

    create(data) {
        const text = this.add.text(640, 360, data.text, {
            font: "24px Arial",
            fill: "#fff",
            wordWrap: { width: 640, useAdvancedWrap: true },
        });
        const continueBtn = this.add.text(640, 640, "continuar", {
            font: "36px Arial",
            fill: "#fff",
        });

        text.setOrigin(0.5, 0.5);
        continueBtn.visible = false;
        continueBtn.setOrigin(0.5, 0.5);
        continueBtn.setInteractive();
        continueBtn.on("pointerdown", () => {
            //Adicionar o caminho para o jogo
        });

        this.time.addEvent({
            delay: 5000,
            callback: () => continueBtn.visible = true,
            loop: false
        });
    }
}