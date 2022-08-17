const incluiInscricaoMapper = require('../mapper/inscricoes/inclui-inscricao.mapper');
const excluiInscricaoMapper = require('../mapper/inscricoes/inclui-inscricao.mapper');

const incluirInscricao = (req, res) => { 
    
    //todo: extrair dados
    //todo: validar os dados     
    //todo: transformando dados da entra em objetos de negocio FALTOU
    //todo: camada de negocio
    
    //todo: montar objeto de saida 
    res.json(incluiInscricaoMapper.domainToDto({})); 

}

const excluirInscricao = (req, res) => {

    //todo: extrair dados
    //todo: validar os dados     
    //todo: transformando dados da entra em objetos de negocio FALTOU
    //todo: camada de negocio
    
    //todo: montar objeto de saida
    res.json(excluiInscricaoMapper.domainToDto({})); 

}


module.exports = {
    incluirInscricao,
    excluirInscricao
}