const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//create a new Collection
const ProductsSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: true
      },
})
            //(name of collection, Schema)
mongoose.model("Products", ProductsSchema)

module.exports = ProductsSchema;