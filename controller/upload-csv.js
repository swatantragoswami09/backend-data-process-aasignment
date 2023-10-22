const fs = require("fs");
const csv = require("csv-parser");
const CsvData = require("../model/CsvData");

// Validation logic here (adjust to your criteria)
function isValid(data) {
  return data.Year && data.Units;
}

const uploadCsv = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided found" });
    }

    const results = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", async (data) => {
          if (!isValid(data)) {
            reject("Validation failed for data");
          }
          results.push(data);
        })
        .on("end", () => resolve());
    });
    // Save valid data to the database
    await CsvData.insertMany(results);

    // Acknowledge the user
    res.status(201).json({ message: "Data upload successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = uploadCsv;
