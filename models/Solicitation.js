const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//create a new Collection
const SolicitationsSchema = new Schema({
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
mongoose.model("Solicitations", SolicitationsSchema)

module.exports = SolicitationsSchema