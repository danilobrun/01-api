const { listaCurso, exibeCurso } = require('../controllers/cursos.controller');
const { incluiInscricao } = require('../controllers/inscricoes.controller');


const cursoRoutes = (app) => {

    app.get('/curso',  listaCurso);
    app.get('/curso/:id',  exibeCurso);
    
    app.post('/curso/:id/inscricao',  incluiInscricao);


}  

module.exports = cursoRoutes


