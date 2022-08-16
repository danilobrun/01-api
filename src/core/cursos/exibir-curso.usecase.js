const cursoRepository = require('../../infra/data/repositories/curso.repository');


module.exports = (id) => {

    let resultFromDB = cursoRepository.findById(id);
    
    
    //todo: 
    
    return resultFromDB;

}