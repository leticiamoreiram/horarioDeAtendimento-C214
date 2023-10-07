const assert = require('assert');
const BuscasHorarioDeAtendimento = require('../src/BuscasHorarioDeAtendimento');
const HorariosDeAtendimentoJson = require('../src/HorariosDeAtendimentoJson');

describe('BuscasHorarioDeAtendimento', () => {
    let buscasHorarioDeAtendimento;

    beforeEach(() => {
        buscasHorarioDeAtendimento = new BuscasHorarioDeAtendimento();
    });

    // Casos de teste de sucesso

    it('deve buscar o nome do professor com ID 1', () => {
        const resultado = buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimento(1);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[1].nomeDoProfessor);
    });

    it('deve buscar o prédio do professor com ID 1', () => {
        const resultado = buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimento(1);
        assert.deepStrictEqual(resultado, HorariosDeAtendimentoJson[1].predio);
    });

    it('deve buscar o horário do professor com ID 1', () => {
        const resultado = buscasHorarioDeAtendimento.buscaHorarioDoHorarioDeAtendimento(1);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[1].horarioDeAtendimento);
    });

    it('deve buscar o período do professor com ID 1', () => {
        const resultado = buscasHorarioDeAtendimento.buscaPeriodoDoHorarioDeAtendimento(1);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[1].periodo);
    });

    it('deve buscar a sala do professor com ID 1', () => {
        const resultado = buscasHorarioDeAtendimento.buscaSalaDoHorarioDeAtendimento(1);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[1].sala);
    });

    it('deve buscar o nome do professor na sala "5"', () => {
        const resultado = buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimentoPorSala('5');
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[1].nomeDoProfessor);
    });

    it('deve buscar o prédio do professor com nome "Chris"', () => {
        const resultado = buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimentoPorNome('Chris');
        assert.deepStrictEqual(resultado, HorariosDeAtendimentoJson[1].predio);
    });

    it('deve buscar o nome do professor com ID 3', () => {
        const resultado = buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimento(3);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[3].nomeDoProfessor);
    });

    it('deve buscar o prédio do professor com ID 5', () => {
        const resultado = buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimento(5);
        assert.deepStrictEqual(resultado, HorariosDeAtendimentoJson[5].predio);
    });

    it('deve buscar o horário do professor com ID 4', () => {
        const resultado = buscasHorarioDeAtendimento.buscaHorarioDoHorarioDeAtendimento(4);
        assert.strictEqual(resultado, HorariosDeAtendimentoJson[4].horarioDeAtendimento);
    });

    // Casos de teste de falha

    it('deve lançar um erro ao buscar prédio que não existe', () => {
        assert.throws(() => {
            buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimentoPorNumero(5);
        }, Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimento(10), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimento(10), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaHorarioDoHorarioDeAtendimento(10), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaPeriodoDoHorarioDeAtendimento(10), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaSalaDoHorarioDeAtendimento(10), Error);
    });

    it('deve lançar um erro ao buscar professor com sala inválida', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimentoPorSala('10'), Error);
    });

    it('deve lançar um erro ao buscar professor com nome inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaPredioDoHorarioDeAtendimentoPorNome('João'), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaNomeDoProfessorDoHorarioDeAtendimento(20), Error);
    });

    it('deve lançar um erro ao buscar professor com ID inválido', () => {
        assert.throws(() => buscasHorarioDeAtendimento.buscaHorarioDoHorarioDeAtendimento(15), Error);
    });
});
