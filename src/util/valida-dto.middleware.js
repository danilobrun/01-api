// const Joi = require('joi');



const criarDetalhes = (error) => {

    return error.details.reduce((acc, item) => {
  
      console.log(acc);
  
      console.log(item);
  
      return [
        ...acc, item.message
      ];
  
    }, []);
  
}
  

exports.validarDTO = (context, schema) => {


    return (req, res, next) => {
  
      try {
        
        const { value, error } = schema.validate(req[context], {
          allowUnknown: false,
        });
  
        req[context] = value;
  
        return error ? res.status(400).send({
            mensagem: criarDetalhes(error).join(';'),
        }) : next();
  
      } catch (error) {
        console.log(error);
      }
    }
  
  }