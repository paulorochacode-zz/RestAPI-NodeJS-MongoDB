const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')


const productsRoute = require ('./routes/Products')
const productsRequests = require ('./routes/Requests')

//Morgan return all callbacks requests on terminal
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) =>{
      res.header('Acces-Control-Allow-Origin','*')
      res.header('Acces-Control-Allow-Header',
            'Origin,X-Requrested-With,Content-Type,Accept,Authorization',
      );

      if (req.method === 'OPTIONS') {
            res.header('Acces-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
            return res.status(200).send({});
      }
      next();
})

//Routes
app.use('/products', productsRoute);
app.use('/requests', productsRequests);

//Error, not found
app.use((req, res, next) =>{
      const error = new Error('Not found')
      error.status = 404;
      next(error);
})

app.use((error, req, res, next) => {
      res.status(error.status || 500);
      return res.send({
            error: {
                  message: error.message
            }
      });
});
module.exports = app;