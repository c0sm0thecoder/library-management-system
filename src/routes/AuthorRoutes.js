const express = require("express");
const router = express.Router();

const authorController = require("../controllers/AuthorController");

router.get("/all/", authorController.getAllAuthors);
router.get("/:id/", authorController.getAuthorById);
router.post("/add-author/", authorController.saveAuthor);
router.put("/update-author/:id/", authorController.updateAuthorById);
router.delete("/delete-author/:id", authorController.deleteAuthorById);

module.exports = router;
