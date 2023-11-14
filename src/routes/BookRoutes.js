const express = require("express");
const router = express.Router();

const bookController = require("../controllers/BookController");

router.get("/all/", bookController.getAllBooks);
router.get("/:id/", bookController.getBookById);
router.post("/add-book/", bookController.saveBook);
// router.put("/update-book/:id/", bookController.updateBookById);
// router.delete("/delete-book/:id", bookController.deleteBookById);

module.exports = router;
