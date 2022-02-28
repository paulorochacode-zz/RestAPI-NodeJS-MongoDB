const express = require("express");
const router = express.Router();


// Return all products
router.get('/', (req, res, next) => {
      res.status(200).send({
            message: "Retun all products",
      });
});

//Insert one product
router.post('/', (req, res, next) => {
      
      const product = {
            name: req.body.name,
            price: req.body.price
      };

      res.status(201).send({
            message: 'Insert a product',
            productCreated: product
      });
});

//Return data of one product
router.get('/:id_product', (req, res, next) => {
      const id = req.params.id_product

      if (id === 'special') {
            res.status(200).send({
                  message: "Special id",
                  id: id
            });
      } else {
            res.status(200).send({
                  message: 'You passed a id',
            });
      }


})


//
router.patch('/', (req, res, next) => {
      res.status(201).send({
            message: 'product altered',
      });
});

router.delete('/', (req, res, next) => {
      res.status(201).send({
            message: 'Product deleted',
      });
})

module.exports = router;