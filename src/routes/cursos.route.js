const { listaCurso, exibeCurso } = require('../controllers/cursos.controller');
const { incluiInscricao } = require('../controllers/inscricoes.controller');

const { validarDTO } = require('../util/valida-dto.middleware');
const { incluirInscricaoBodyDto, inscluirInscricaoParamsDto } = require('../dto/incluir-inscricao');

const cursoRoutes = (app) => {

    app.get('/curso',  listaCurso);
    app.get('/curso/:id',  exibeCurso);
    app.post(
        '/curso/:id/inscricao', 
        validarDTO('params', inscluirInscricaoParamsDto),  
        validarDTO('body', incluirInscricaoBodyDto),  
        incluiInscricao
    );


}  

module.exports = cursoRoutes


