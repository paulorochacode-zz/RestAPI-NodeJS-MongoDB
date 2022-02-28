const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { findOne } = require("mongoose/lib/model");
require("../models/Products");
const Product = mongoose.model("Products");

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
      });
});

//Insert one product
router.post('/', (req, res, next) => {

      const newProduct = new Product({
            name: req.body.name,
            price: req.body.price
      });
      newProduct.save().then((Product) => {
            res.status(201).send({
                  message: 'Insert a product',
                  productCreated: newProduct
            });
      }).catch((err) => {
            res.status(500).send({
                  message: err,
            });
      });

});

//Return data of one product
router.get('/:id_product', (req, res, next) => {
      Product.findOne({ _id: req.params.id_product }).lean().then((product) => {
            res.status(200).send({
                  message: product,
            });
      }).catch((err) => {
            res.status(500).send({
                  message: err,
            });
      });

});


//to edit a product
router.patch('/:id_product', (req, res, next) => {
      var doc = Product.findOne({ _id: req.params.id_product }).then((doc) => {
            doc.name = req.body.name,
                  doc.price = req.body.price
            doc.save().then(() => {
                  res.status(202).send({
                        message: 'Altered with success',
                        ProductAltered: doc,
                  });
            }).catch((err) => {
                  res.status(500).send({
                        message: 'Error when try to Alter : ' + err,
                        ProductAltered: doc,
                  });
            });

      });

});

router.delete('/:id_product', (req, res, next) => {
      var doc = Product.findOne({ _id: req.params.id_product }).then((doc) => {
            doc.remove().then(() => {
                  res.status(202).send({
                        message: 'Deleted with success',
                        ProductDeleted: doc,
                  });
            }).catch((err) => {
                  res.status(500).send({
                        message: 'Error when try to Delete : ' + err,
                        ProductAltered: doc,
                  });
            });

      });
});

module.exports = router;