class Calculadora {
    montarPropostas(cliente) {
        const propostas = [];

        propostas.push({
            total: cliente.valorFinanciado * 2,
            parcelas: 2,
            valorParcela: cliente.valorFinanciado
        },{
          total: cliente.valorFinanciado * 2,
          parcelas: 3,
          valorParcela: cliente.valorFinanciado * (2/3)
        })
        return propostas;
    }
}

module.exports = Calculadora;