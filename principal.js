const Blockchain = require('./blockchain');
function imprimirCadeia(cadeia) {

    for (const bloco of cadeia) {

        console.log('-------------------------');
        console.log('Índice:', bloco.indice);
        console.log('Dados:', bloco.dados);
        console.log('Hash:', bloco.hash.slice(0, 10));

    }

}
const registro = new Blockchain();

// Cadastrar as entregas
registro.adicionar('Entrega E-001 para Ji-Parana: em rota');
registro.adicionar('Entrega E-002 para Ouro Preto: enviada');
registro.adicionar('Entrega E-003 para Jaru: entregue');

// Imprimir a cadeia
console.log('\n===== REGISTRO DE ENTREGAS =====');

imprimirCadeia(registro.cadeia);

// Verificar se a cadeia e valida
console.log('\nA cadeia e valida?', registro.ehValida());
// Testar cadastro de dados invalidos
console.log('\n===== TESTE DE DADOS INVALIDOS =====');

try {
    registro.adicionar('AB');
} catch (erro) {
    console.log('Erro:', erro.message);
}
// Testar adulteracao de dados
console.log('\n===== TESTE DE ADULTERACAO =====');

registro.cadeia[1].dados = 'Entrega adulterada';

console.log('Dados da entrega foram modificados!');

console.log('A cadeia continua valida?', registro.ehValida());
