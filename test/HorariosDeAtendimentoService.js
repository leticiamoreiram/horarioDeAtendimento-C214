const HorariosDeAtendimentoJson = require('../src/HorariosDeAtendimentoJson');

class HorariosDeAtendimentoService {
    busca(id) {
        if (HorariosDeAtendimentoJson[id]) {
            return HorariosDeAtendimentoJson[id];
        } else {
            throw new Error('Professor não encontrado');
        }
    }

    buscaPorNome(nome) {
        const professor = Object.values(HorariosDeAtendimentoJson).find(
            (prof) => prof.nomeDoProfessor === nome
        );
        if (professor) {
            return professor;
        } else {
            throw new Error('Professor não encontrado');
        }
    }

    buscaPorSala(sala) {
        const professor = Object.values(HorariosDeAtendimentoJson).find(
            (prof) => prof.sala === sala
        );
        if (professor) {
            return professor;
        } else {
            throw new Error('Professor não encontrado');
        }
    }
}

module.exports = HorariosDeAtendimentoService;
