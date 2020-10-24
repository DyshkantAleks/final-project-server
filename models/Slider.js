const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SliderSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
    route: {
      type: String,
      require: true
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    sliderImageUrl: {
      type: String,
      required: true
    },
    desctopSliderImageUrl: {
      type: String,
      required: true
    },
    fullDescription: {
      type: String,
      required: true
    }, 
         
    product: {
      type: Schema.Types.ObjectId,
      ref: "products"
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "catalogs"
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers"
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Slider = mongoose.model("slides", SliderSchema, "slides");
