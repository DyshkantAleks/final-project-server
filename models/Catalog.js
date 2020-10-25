const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatalogSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    parentId: {
      type: String,
      required: true
    },
    description: {
      type: String     
    },
    icon: {
      type: String     
    },
    image: {
      type: String     
    },
    route: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Catalog = mongoose.model("catalogs", CatalogSchema);
