const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
	image: String,
	title: String,
    price:String
})

module.exports = mongoose.model("Product", productSchema)