const bookService = require("../services/BookService");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
};

const saveBook = async (req, res, next) => {
  try {
    const book = await bookService.saveBook(req.body);
    res.json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  saveBook,
};
