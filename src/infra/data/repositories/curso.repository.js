const CursoEntity = require('../../../core/cursos/curso.entity');


const data = [
    
    {
        id: "1",
        descricao: "teste 1",
        status: "ativo",

    },

    {
        id: "2",
        descricao: "teste 2",
        status: "inativo",
    }
]





const search = ({ status }) => {

    let resultFromDB = data;

    if (status) {
        resultFromDB =  data.filter(item => item.status == status)                    
    }
    
    //todo: extrair logica de conversao de dataObejct para Entity     
    return resultFromDB.map(item => {

        const { 
            id,
            descricao,
            status 
        } = item;

        return CursoEntity.build(
            id,
            descricao,
            status
        )
    });

}

module.exports = {

    search,

}

