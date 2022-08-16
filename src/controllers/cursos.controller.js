const cursosStatus = [ "ativo", "inativo"];

const exibirCursoUseCase = require('../core/cursos/exibir-curso.usecase');

const listaCursoUseCase = require('../core/cursos/listar-cursos.usecase');
const listaCursoMapper = require('../mapper/cursos/lista-curso.mapper');


const listaCurso = (req, res) => { 
    
    //todo: extrair dados
    console.log(req.query);
    const query = req.query.status;

    //todo: validar os dados     
    if (query) {
        if(!cursosStatus.includes(req.query.status))            
            return res.status(400).json({
                mensagem: "",
            }) 
    }
    
    //todo: transformando dados da entra em objetos de negocio FALTOU
    

    //todo: camada de negocio
    const ucResult = listaCursoUseCase({ status: query})

    //todo: montar objeto de saida 
    res.json(listaCursoMapper.domainToDTO(ucResult)); 
  
}

const exibeCurso = (req, res) => {

    //todo: extrair dados
    console.log(req.params);
    const id = req.params.id;

    //todo: validar os dados     
    if (!id || id == ' ') {
        
        return res.status(400).json({
            mensagem: "cusrso id não informado",
        }) 
    }
    
    //todo: camada de negocio
    const ucResult = exibirCursoUseCase(id);

    //todo: montar objeto de saida 

    res.json({
        id: ucResult.id,
        descricao: ucResult.descricao,
        status: ucResult.status,
        inscricoes: [
            ... ucResult.inscricoes.map(item => {
                return {
                    id: item.id,
                    dataCadastro: item.dataCadastro, 
                    alunoNome: item.alunoNome,
                    status: item.status
                }
            })
        ]

    })



}


module.exports = {
    listaCurso,
    exibeCurso
}