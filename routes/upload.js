const express = require("express");
const router = express.Router();

const uploadCsv = require("../controller/upload-csv");
const upload = require("../middlewares/upload");

router.post("/upload", upload.single("csvFile"), uploadCsv);

module.exports = router;
