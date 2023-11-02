const express = require("express");
const router = express.Router();

const authorController = require("../controllers/AuthorController");

router.get("/all/", authorController.getAllAuthors);

module.exports = router;
