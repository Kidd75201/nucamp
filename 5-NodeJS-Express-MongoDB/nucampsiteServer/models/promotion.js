const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose Currency Library for 'cost'
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

// Promotion Schema
const promotionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: false,
    },
    cost: {
      type: Currency,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create Model
const Promotion = mongoose.model("Promotion", promotionSchema);

// export
module.exports = Promotion;
