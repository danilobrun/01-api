const incluiInscricaoMapper = require('../mapper/inscricoes/inclui-inscricao.mapper');
const excluiInscricaoMapper = require('../mapper/inscricoes/excluir-inscricao.mapper');
const joi = require('joi');

const incluirInscricaoUseCase = require('../../core/inscricoes/incluir-inscricao.usecase');

const incluiInscricao = (req, res) => { 
    

    try {
        
        //todo: extrair dados
        const { params, body } = req;

        //todo: transformando dados da entra em objetos de negocio FALTOU
        //todo: remover logica para mapper 
        const domain = {
            cursoId: params.id,
            alunoNome: body.alunoNome, 
            alunoEmail: body.alunoEmail, 
        }

        //todo: camada de negocio
        const inscricao = incluirInscricaoUseCase(domain);
        
        //todo: montar objeto de saida  
        return res.json(incluiInscricaoMapper.domainToDto({ inscricao })); 

    } catch (error) {
        
        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        }); 

    }





    
}

const excluiInscricao = (req, res) => {

    //todo: extrair dados
    //todo: validar os dados     
    //todo: transformando dados da entra em objetos de negocio FALTOU
    //todo: camada de negocio
    
    //todo: montar objeto de saida
    res.json(excluiInscricaoMapper.domainToDto({})); 

}


module.exports = {
    incluiInscricao,
    excluiInscricao
}