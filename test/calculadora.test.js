const Calculadora = require('../lib/calculadora');

describe('calculadora', () => {
    test('cliente que ganha menos de 1000', () => {
        let cliente = {
            nome: 'Joao da Silva',
            salario: 800.00,
            idade: 29,
            valorFinanciado: 1000.00
        };
        
        let calculadora = new Calculadora();
        let props = calculadora.montarPropostas(cliente);

        expect(props.length).toBe(2);
        expect(props[0].total).toBeCloseTo(2000.00);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].valorParcela).toBeCloseTo(1000.00);
        
        expect(props.length).toBe(2);
        expect(props[1].total).toBeCloseTo(2000.00);
        expect(props[1].parcelas).toBe(3);
        expect(props[1].valorParcela).toBeCloseTo(666.666);
    });
});