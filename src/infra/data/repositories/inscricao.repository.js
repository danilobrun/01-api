const InscricaoEntity = require('../../../core/inscricoes/inscricao.entity');
const IncricaoEntity = require('../../../core/inscricoes/inscricao.entity');

const data = [
    {
        id: '12121',
        curso_id: '1',
        data_cadastro: '2022-08-15',
        aluno_email: 'test@aluno.com',
        aluno_nome: 'aluno test',
    },
]

const search = ({ cursoId }) => {

    let resultFromDB = data;
    if (cursoId) {
        resultFromDB =  data.filter(item => item.curso_id == cursoId)                    
    }
    
    //todo: extrair logica de conversao de dataObejct para Entity     
    return resultFromDB.map(item => {

        const { 
            id,
            curso_id,
            data_cadastro,
            aluno_email,
            aluno_nome,
        } = item;

        return IncricaoEntity.build(
            id,
            curso_id,
            data_cadastro,
            undefined,
            aluno_email,
            aluno_nome
        )
    });

}

const create = (model) => {

    const newItem = {
        id: '121211',
        curso_id: model.cursoId,
        data_cadastro: '2022-08-22',
        aluno_email: model.alunoEmail,
        aluno_nome: model.alunoNome,
    }

    data.push(newItem);
    
    return InscricaoEntity.build(
        newItem.id,
        model.cursoId,
        newItem.data_cadastro,
        model.alunoEmail,
        model.alunoNome
    );
} 




module.exports = {

    search,
    create

}

