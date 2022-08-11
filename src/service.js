const express = require('express')
const app = express()
const cursoRoutes = require('./routes/cursos.route');

// const middleware = require('./util/middlewarelocal');


app.use(express.json());

cursoRoutes(app);

// app.post('/user/auth', function (req, res) { 
      
//     // // fdsfsdfsdfsdf
//     // console.log("bacon: ", req.bacon)
//     // console.log(req);
//     // 
//     res.json({
//         token: "2432423432424234"
//     }); 

// });



module.exports = app

// app.use((req, res, next) => {
//     console.log("header: ", req.headers)
//     console.log("body: ", req.body)
//     req.bacon = {
//       id: 'test',
//     } 
//     next();
//   })


