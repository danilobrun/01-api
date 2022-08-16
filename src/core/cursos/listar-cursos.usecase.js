const cursoRepository = require('../../infra/data/repositories/curso.repository');


module.exports = ({ status }) => {

    //todo: extrair logica de construcao do filtro de dentro do usecase

    const  filter = {
        status
    };

    const resultFromDB = cursoRepository.search({status});
    
    return resultFromDB;

}