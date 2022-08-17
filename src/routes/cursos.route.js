const { listaCurso, exibeCurso } = require('../controllers/cursos.controller');


const cursoRoutes = (app) => {

    app.get('/curso',  listaCurso);
    app.get('/curso/:id',  exibeCurso);
    
    app.post('/curso/:id/inscricao',  (req, res) => {

        console.log(req.params)
        console.log(req.body)

        res.json({
            mensagem: 'sucesso!',
            inscricao: {
                id: '1',
                dataCadastro: '2022-08-17', 
                alunoNome: 'fdsfsdfd',
                status: 'fdsfsdfdsf'
            }
        });

    });


}  

module.exports = cursoRoutes


