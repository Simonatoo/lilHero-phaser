class Navigation extends Phaser.GameObjects.Sprite {
    /**
     * Utilize esse prefab para navegar entre cenas do projeto. Ex.: Botão de voltar.
     * @param {string} scene - Enviar cena padrão
     * @param {number} x - Posição X do objeto
     * @param {number} y - Posição Y do objeto
     * @param {string} sprite - Sprite de apresentação
     * @param {string} toScene - Cena que deseja direcionar
     */
    constructor(scene, x, y, sprite, toScene) {
        super(scene, x, y, sprite);

        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerover', () => scene.input.setDefaultCursor('pointer'));
        this.on('pointerout', () => scene.input.setDefaultCursor('auto'));
        this.on('pointerdown', () => {
            scene.input.setDefaultCursor('auto');
            this.goto(scene, toScene);
        });
    }

    goto(scene, toScene) {
        scene.scene.start(toScene);
    }
}