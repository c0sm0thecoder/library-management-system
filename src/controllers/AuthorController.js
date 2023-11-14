const authorService = require("../services/AuthorService");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    res.json(author);
  } catch (error) {
    next(error);
  }
};

const saveAuthor = async (req, res, next) => {
  try {
    const author = await authorService.saveAuthor(req.body);
    res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};

const updateAuthorById = async (req, res, next) => {
  try {
    const updatedAuthor = await authorService.updateAuthorById(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

const deleteAuthorById = async (req, res, next) => {
  try {
    const deletedAuthor = await authorService.deleteAuthorById(req.params.id);
    res.status(200).json(deletedAuthor);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  saveAuthor,
  updateAuthorById,
  deleteAuthorById,
};
