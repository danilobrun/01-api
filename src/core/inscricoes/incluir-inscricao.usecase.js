

const CursoRepository = require('../../infra/data/repositories/curso.repository');
const InscricaoRepository = require('../../infra/data/repositories/inscricao.repository');

const { BusinessError } = require('../erros/business.error');



module.exports = (model) => {

    const { cursoId, alunoEmail, alunoNome } = model;

    //todo: validar se o curso existe 
    const curso = CursoRepository.findById(cursoId);
    if (!curso)        
        throw new BusinessError('O curso informado não existe');

    
    //todo: validar se o aluno já esta cadastrado naquele curso
    const inscricoes = InscricaoRepository.search({
        cursoId: cursoId,
    });
    if (inscricoes.find(item => { return item.alunoEmail == alunoEmail })) 
        throw new BusinessError('O aluno já encontra-se cadastrado.');
    
    //todo: salvar dados no banco de dados
    const inscricao = InscricaoRepository.create({
        cursoId,
        alunoEmail,
        alunoNome
    })

    return inscricao; 

}