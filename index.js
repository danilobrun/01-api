const express = require('express')
const app = express()
const porta = process.env.PORTA || 3000


app.use(express.json())


app.use((req, res, next) => {
  
  console.log("header: ", req.headers)
  console.log("body: ", req.body)
  
  req.bacon = {
    id: 'test',
  } 
  
  next();

})




//REQUEST 
  
  // CONTEXTOS

    // HEADER

      // estao contidos os dados de configuracao da request e tambem os dados autenticacao e autorização 

    // BODY 

      // estarao contidos os dados para execução do meu comando 

    // PARAMS


    // QUERY
    //   


  //METHOD: 

    //GET 
    //    - comum utilizar para expor consultas nos servicos
    
    app.get('/', function (req, res) { 
      res.send('Hello World 1.1') 
    });


    app.get('/:id', function (req, res) { 
      res.send('Hello World 1.1') 
    });
    
    //POST 
    
    app.post('/', function (req, res) { 
      
      res.send('Hello World 1.2') 
      
    });


    const middlewareLocal = (req, res, next) => {

      if (req.bacon.id !== 'test2') {
        res.status(401).send('usuario não autenticado')
      }
      else {
        next()
      }

    }
    
    app.post('/user', middlewareLocal, middlewareLocal, function (req, res) { 
      
  
      // fdsfsdfsdfsdf

      console.log("bacon: ", req.bacon)
      console.log(req);
      res.send('Hello World 1.2'); 

      
      
    });
    
    
    //PUT 
    
    //DELETE 
    
    //PATH
    
  //RESPONSE
    

const listener = app.listen(porta, function () {
  console.log("Node.js listening on port " + listener.address().port);
});




