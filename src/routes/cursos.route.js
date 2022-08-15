const { listaCurso, exibeCurso } = require('../controllers/cursos.controller');


const cursoRoutes = (app) => {

    app.get('/curso',  listaCurso);
    app.get('/curso/:id',  exibeCurso);

}  

module.exports = cursoRoutes


