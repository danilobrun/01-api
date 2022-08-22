const incluiInscricaoMapper = require('../mapper/inscricoes/inclui-inscricao.mapper');
const excluiInscricaoMapper = require('../mapper/inscricoes/inclui-inscricao.mapper');
const joi = require('joi');


const incluiInscricao = (req, res) => { 
    
    //todo: extrair dados
    const { params, body } = req;

    console.log(params)
    const paramSchema = joi.object({
        id: joi.number().required(),
    });    
    
    const paramResult = paramSchema.validate(params);
    if (paramResult.error) {

        const { details } = paramResult.error;                

        const detailsMessages = details.reduce((acc, item) => {

            return [ ...acc, item.message ]
        
        }, [])

        return res.status(400).json({
            mensagem: detailsMessages.join(';')
        });                        
    }
    

    //todo: transformando dados da entra em objetos de negocio FALTOU


    //todo: camada de negocio
    
    //todo: montar objeto de saida 
    res.json(incluiInscricaoMapper.domainToDto({})); 

    
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