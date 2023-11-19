class NewChar extends Phaser.Scene {
    constructor() {
        super({ key: "newChar" });
    }
    
    create() {
        this.points = 5;
        this.playerStatus = this.registry.get('playerStatus');
        this.statusGroup = this.add.group();
        const title = this.add.text(640, 150, 'Novo personagem', { font: "48px Arial" });
        const continueBtn = this.add.text(640, 640, 'continuar', { font: "36px Arial" });

        continueBtn.setOrigin(0.5, 0.5);
        continueBtn.setInteractive();
        continueBtn.on('pointerdown', () => {
            //Direcionar o usuário para a tela do jogo
        })
        
        title.setOrigin(0.5, 0.5);
        this.createStatusInterface();
        this.justTest();
    }

    createStatusInterface() {
        this.clearStatusInterface();
        
        const remainingPoints = this.add.text(640, 250, this.points, { font: "28px Arial" });
        this.statusGroup.add(remainingPoints);
        
        let index = 0;

        for (const key in this.playerStatus) {
            const name = this.add.text(540, 360 + (36 * index), key);
            const value = this.add.text(640, 360 + (36 * index), this.playerStatus[key]);
            const levelUp = this.add.text(660, 360 + (36 * index), '>');
            const levelDown = this.add.text(620, 360 + (36 * index), '<');

            this.statusGroup.add(name);
            this.statusGroup.add(value);
            
            name.setOrigin(0.5, 0.5);
            value.setOrigin(0.5, 0.5);
            levelUp.setInteractive();
            levelUp.on('pointerdown', () => {
                if(this.points == 0) return;
                this.playerStatus[key]++;
                this.points--;
                this.createStatusInterface();
            });
            levelDown.setInteractive();
            levelDown.on('pointerdown', () => {
                if(this.playerStatus[key] <= 1) return;
                this.playerStatus[key]--;
                this.points++;
                this.createStatusInterface();
            })
            
            index++;
        }
    }

    clearStatusInterface() {
        this.statusGroup.clear(true, true);
    }

    justTest() {
        const testBtn = this.add.text(20, 20, 'botão para testes');
        testBtn.setInteractive();
        testBtn.on('pointerdown', () => console.log(this.playerStatus));
    }
}