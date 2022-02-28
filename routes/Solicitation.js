const express = require ("express");
const router = express.Router();


// Return all solicitations
router.get('/', (req, res, next) =>{
      res.status(200).send({
            message: "Using get into requests route"
      });
});

//Insert one solicitations
router.post('/', (req, res) => {

      const newSolicitation = new Solicitation({
            name: req.body.name,
            price: req.body.price
      })
      newProduct().save().then(() => {
            res.status(201).send({

                  message: 'Inserted a solicitation',
                  solicitationCreated: newSolicitation
            });

      });
})


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

//Return data of one solicitations
router.get('/:id_solicitation', (req, res, next) => {
      const id = req.params.id_request
      res.status(200).send({
            message: "Detals of the solicitation",
            id_request: id
      });

      
})


//Delete  one solicitation
router.delete('/',(req, res, next) => {
      res.status(201).send({
            message: 'Using ths DELETE into solicitations routes'
      });
});

module.exports = router;