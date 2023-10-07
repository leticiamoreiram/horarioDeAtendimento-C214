const HorariosDeAtendimentoService = require('../test/HorariosDeAtendimentoService');

class BuscasHorarioDeAtendimento {
    constructor() {
        this.horariosDeAtendimentoService = new HorariosDeAtendimentoService();
    }

    buscaNomeDoProfessorDoHorarioDeAtendimento(id) {
        const professor = this.horariosDeAtendimentoService.busca(id);
        return professor.nomeDoProfessor;
    }

    buscaPredioDoHorarioDeAtendimento(id) {
        const professor = this.horariosDeAtendimentoService.busca(id);
        return professor.predio;
    }

    buscaHorarioDoHorarioDeAtendimento(id) {
        const professor = this.horariosDeAtendimentoService.busca(id);
        return professor.horarioDeAtendimento;
    }

    buscaPeriodoDoHorarioDeAtendimento(id) {
        const professor = this.horariosDeAtendimentoService.busca(id);
        return professor.periodo;
    }

    buscaSalaDoHorarioDeAtendimento(id) {
        const professor = this.horariosDeAtendimentoService.busca(id);
        return professor.sala;
    }

    buscaNomeDoProfessorDoHorarioDeAtendimentoPorSala(sala) {
        const professor = this.horariosDeAtendimentoService.buscaPorSala(sala);
        return professor.nomeDoProfessor;
    }

    buscaPredioDoHorarioDeAtendimentoPorNome(nome) {
        const professor = this.horariosDeAtendimentoService.buscaPorNome(nome);
        return professor.predio;
    }
}

module.exports = BuscasHorarioDeAtendimento;
