const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    brand: {
      type: String,
      require: true
    },
    category: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    itemNo: {
      type: String,
      required: true
    },
    currentPrice: {
      type: Number,
      required: true
    },
    previousPrice: {
      type: Number,
     },
    subCategory: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    discount: {
      type: Number
    },
    specifications: {
      covering:{
        type: String
      },
      casing: {
        type: String
      }
    },
    imageUrl: 
       [ String],  
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    sizes: {
      height: {
        type:Number
      },
      width: {
        type:Number
      },
      length:{
        type:Number
      },
    },    
    manufacturer: {
      type: String
    },
    isNewProduct: {
      type: Boolean,
      default: false
    },
    isTopRated: {
      type: Boolean,
      default: false
    },
     isSale: {
      type: Boolean,
      default: false
    },
    manufacturerCountry: {
      type: String
    },
    seller: {
      type: String
    },
    description: {
      type: String,
      require: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);
