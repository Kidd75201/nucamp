const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  comment Schema
const partnerSchema = new Schema(
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
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create Model
const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
