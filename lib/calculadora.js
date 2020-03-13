class Calculadora {
    montarPropostas(cliente) {
        return this.calcularPropostas(cliente);
    }

    calcularPropostas(cliente) {
        let propostas = [];
        if (cliente.salario < 1000.00) {
            propostas.push({
                total: cliente.valorFinanciado * 2,
                parcelas: 2,
                valorParcela: cliente.valorFinanciado
            },{
                total: cliente.valorFinanciado * 2,
                parcelas: 3,
                valorParcela: cliente.valorFinanciado * (2/3)
            })
        } else if (cliente.salario > 1000.00 && cliente.salario <= 5000.00) {
            propostas.push({
                total: cliente.valorFinanciado * 1.3,
                parcelas: 2,
                valorParcela: cliente.valorFinanciado * (0.65)
            },{
                total: cliente.valorFinanciado * 1.5,
                parcelas: 4,
                valorParcela: cliente.valorFinanciado * (0.375)
            },{
                total: cliente.valorFinanciado * 1.5,
                parcelas: 10,
                valorParcela: cliente.valorFinanciado * (0.15)
            })
        } else {
            propostas.push({
                total: cliente.valorFinanciado * 1.1,
                parcelas: 2,
                valorParcela: cliente.valorFinanciado * (0.55)
            },{
                total: cliente.valorFinanciado * 1.3,
                parcelas: 4,
                valorParcela: cliente.valorFinanciado * (0.325)
            },{
                total: cliente.valorFinanciado * 1.3,
                parcelas: 10,
                valorParcela: cliente.valorFinanciado * (0.13)
            },{
                total: cliente.valorFinanciado * 1.4,
                parcelas: 20,
                valorParcela: cliente.valorFinanciado * (0.07)
            })
        }
        return propostas;
    }
}

module.exports = Calculadora;