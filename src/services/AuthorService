const authorRepository = require("../repositories/AuthorRepository");

const getAllAuthors = async () => {
  try {
    const authors = await authorRepository.getAllAuthors();
    if (!authors) {
      throw new Error("Author could not be found.");
    }
    return authors;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllAuthors,
};
