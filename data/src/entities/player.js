class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.sprite(this);
    }

    heavyAttack(targetDistance, targetAgi) {
        if(targetDistance == null || targetAgi == null) throw new Error('You must provide both targetDistance and targetAgi');

        //Valida se o target está dentro do range de ataque
        if(targetDistance > 100) return false;

        const playerAgi = this.scene.registry.get('playerStatus').dex;
        return hitChanceCalculator(playerAgi, targetAgi, 0.2); 
    }

    normalAttack(targetDistance, targetAgi) {
        if(targetDistance == null || targetAgi == null) throw new Error('You must provide both targetDistance and targetAgi');

        //Valida se o target está dentro do range de ataque
        if(targetDistance > 100) return false;

        const playerAgi = this.scene.registry.get('playerStatus').dex;
        return hitChanceCalculator(playerAgi, targetAgi, 0.3); 
    }

    quickAttack(targetDistance, targetAgi) {
        if(targetDistance == null || targetAgi == null) throw new Error('You must provide both targetDistance and targetAgi');

        //Valida se o target está dentro do range de ataque
        if(targetDistance > 100) return false;
        
        const playerAgi = this.scene.registry.get('playerStatus').dex;
        return hitChanceCalculator(playerAgi, targetAgi); 
    }
}