const Calculadora = require('../lib/calculadora');
const calculadora = new Calculadora();

const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });


describe('calculadora', () => {
    test('cliente com salario menor ou igual de 1000', () => {
        let cliente = {
            nome: 'Joao da Silva',
            salario: 800.00,
            idade: 29,
            valorFinanciado: 1000.00
        };
        
        let props = calculadora.montarPropostas(cliente);

        expect(props.length).toBe(2);
        expect(props[0]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 2,
            valorParcela: 1000.00
        }, 2);

        expect(props[1]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 3,
            valorParcela: 666.66
        }, 2);
    });

    test('cliente com salario maior que 1000 e menor igual a 5000', () => {
        let cliente = {
            nome: 'Maria de Souza',
            salario: 3000.00,
            idade: 50,
            valorFinanciado: 4000.00
        };

        let props = calculadora.montarPropostas(cliente);


        expect(props.length).toBe(3);
        expect(props[0]).toBeDeepCloseTo({
            total: 5200.00,
            parcelas: 2,
            valorParcela: 2600.00
        }, 2);

        expect(props[1]).toBeDeepCloseTo({
            total: 6000.00,
            parcelas: 4,
            valorParcela: 1500.00
        }, 2);

        expect(props[2]).toBeDeepCloseTo({
            total: 6000.00,
            parcelas: 10,
            valorParcela: 600.00
        }, 2);
    });

    test('cliente com salario maior que 5000', () => {
        let cliente = {
            nome: 'Kleber Joao',
            salario: 10000.00,
            idade: 47,
            valorFinanciado: 10000.00
        };

        let props = calculadora.montarPropostas(cliente);


        expect(props.length).toBe(4);
        expect(props[0]).toBeDeepCloseTo({
            total: 11000.00,
            parcelas: 2,
            valorParcela: 5500.00
        }, 2);

        expect(props[1]).toBeDeepCloseTo({
            total: 13000.00,
            parcelas: 4,
            valorParcela: 3250.00
        }, 2);

        expect(props[2]).toBeDeepCloseTo({
            total: 13000.00,
            parcelas: 10,
            valorParcela: 1300.00
        }, 2);

        expect(props[3]).toBeDeepCloseTo({
            total: 14000.00,
            parcelas: 20,
            valorParcela: 700.00
        }, 2);
    });
});