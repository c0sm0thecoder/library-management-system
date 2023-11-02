const authorService = require("../services/AuthorService");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
};
