const cursoRepository = require('../../infra/data/repositories/curso.repository');
const inscricaoRepository = require('../../infra/data/repositories/inscricao.repository');


module.exports = (id) => {

    const curso = cursoRepository.findById(id);
    
    if (!curso) {
        return undefined;
    }

    let listaInscricoes = inscricaoRepository.search({
        cursoId: id
    });
    
    //todo: incluir dados de incricoes
    curso.inscricoes = listaInscricoes;

    return curso;

}