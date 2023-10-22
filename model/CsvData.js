const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define a schema and model for storing CSV data in MongoDB (adjust as needed)
const csvDataSchema = new Schema({
  // Define your schema fields here
  Year: {
    type: String,
    required: true,
  },
  Industry_aggregation_NZSIOC: {
    type: String,
    require: true,
  },
  Industry_code_NZSIOC: {
    type: String,
    require: true,
  },
  Industry_name_NZSIOC: {
    type: String,
    require: true,
  },
  Units: {
    type: String,
    require: true,
  },
  Variable_code: {
    type: String,
    require: true,
  },
  Variable_name: {
    type: String,
    require: true,
  },
  Variable_category: {
    type: String,
    require: true,
  },
  Value: {
    type: String,
    require: true,
  },
  Industry_code_ANZSIC06: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("CsvData", csvDataSchema);
