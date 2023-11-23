/** 
 * Calcula a chance de acerto com base no nível de destreza do atacador e o nível de agilidade do atacado.
 * @param {number} selfDex - Destreza do atacador.
 * @param {number} targetAgi - Agilidade do atacado.
 * @param {number} [chanceValue=0.5] - Desvio de probabilidade. 0.5 representa 50% de chance de acerto.
 * @returns {number} Chance do atacador acertar o ataque. 
*/
function hitChanceCalculator(selfDex, targetAgi, chanceValue=0.5) {
    if (selfDex == null || targetAgi == null) {
        return console.error('You must provide both selfDex and targetAgi');
    }

    const normalizedDex = selfDex / 100;
    const normalizedAgi = targetAgi / 100;
    const chanceOfSuccess = chanceValue + normalizedDex - normalizedAgi;
    const randomValue = Math.round(Math.random() * 10) / 10;

    return randomValue < chanceOfSuccess;
}