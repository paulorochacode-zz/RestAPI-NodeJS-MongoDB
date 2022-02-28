const express = require ("express");
const router = express.Router();


// Return all requests
router.get('/', (req, res, next) =>{
      res.status(200).send({
            message: "Using get into requests route"
      });
});

//Insert one request
router.post('/',(req, res, next) => {
      const request = {
            id_product: req.body.id_product,
            quantity: req.body.quantity
      }
      res.status(201).send({
            message: 'Using ths post into requests route',
            requestCreated: request
      });
});

//Return data of one request
router.get('/:id_request', (req, res, next) => {
      const id = req.params.id_request
      res.status(200).send({
            message: "Detals of the request",
            id_request: id
      });

      
})


//Delete  one request
router.delete('/',(req, res, next) => {
      res.status(201).send({
            message: 'Using ths DELETE into requests routes'
      });
});

module.exports = router;