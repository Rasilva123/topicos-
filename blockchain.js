
const Bloco = require('./bloco');

class Blockchain {

    constructor() {
        this.cadeia = [];

        const genesis = new Bloco(0, 'Bloco genesis', '0');

        this.cadeia.push(genesis);
    }

    adicionar(dados) {
        const ultimoBloco = this.cadeia[this.cadeia.length - 1];

        const novoBloco = new Bloco(
            this.cadeia.length,
            dados,
            ultimoBloco.hash
        );

        this.cadeia.push(novoBloco);
    }

    ehValida() {

        for (let i = 1; i < this.cadeia.length; i++) {

            const blocoAtual = this.cadeia[i];
            const blocoAnterior = this.cadeia[i - 1];

            if (blocoAtual.hash !== blocoAtual.calcularHash()) {
                return false;
            }

            if (blocoAtual.hashAnterior !== blocoAnterior.hash) {
                return false;
            }
        }

        return true;
    }

}

module.exports = Blockchain;
