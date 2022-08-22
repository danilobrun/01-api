const joi = require('joi');

const incluirInscricaoBodyDto = joi.object({
    alunoNome: joi.string().min(8).max(15).required(),
    alunoEmail: joi.string().email().required(),
});

const inscluirInscricaoParamsDto = joi.object({
    id: joi.number().required(),
});    

module.exports = {
    incluirInscricaoBodyDto,
    inscluirInscricaoParamsDto,
}


