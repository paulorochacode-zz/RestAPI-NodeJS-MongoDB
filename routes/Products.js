const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
require ("../models/Products")
const Product = mongoose.model("Products")

// Return all products
router.get('/', (req, res, next) => {
      
      Product.find().lean().then((products) => {
            res.status(200).send({
            message: products,
            });
      }).catch((err) => {
            res.status(500).send({
                  message: err,
                  });
      })
})

//Insert one product
router.post('/', (req, res) => {

      const newProduct = new Product({
            name: req.body.name,
            price: req.body.price
      })
      newProduct.save().then((Product) => {
            res.status(201).send({
                  message: 'Insert a product',
                  productCreated: newProduct
            });
      }).catch((err)=>{
            res.status(500).send({
                  message: err,
            });
      })

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