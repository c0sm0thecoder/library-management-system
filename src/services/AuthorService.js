const authorRepository = require("../repositories/AuthorRepository");

const getAllAuthors = async () => {
  try {
    const authors = await authorRepository.getAllAuthors();
    if (!authors) {
      throw new Error("Authors could not be found.");
    }
    return authors;
  } catch (error) {
    throw error;
  }
};

const getAuthorById = async (id) => {
  try {
    const author = await authorRepository.getAuthorById(id);
    if (!author) {
      throw new Error("Author could not be found.");
    }
    return author;
  } catch (error) {
    throw error;
  }
};

const saveAuthor = async (author) => {
  try {
    const savedAuthor = await authorRepository.saveAuthor(author);
    if (!savedAuthor) {
      throw new Error("Author could not be saved.");
    }
    return savedAuthor;
  } catch (error) {
    throw error;
  }
};

const updateAuthorById = async (id, body) => {
  try {
    const updatedAuthor = await authorRepository.updateAuthorById(id, body);
    if (!updatedAuthor) {
      throw new Error("Author could not be updated.");
    }
    return updatedAuthor;
  } catch (error) {
    throw error;
  }
};

const deleteAuthorById = async (id) => {
  try {
    const deletedAuthor = await authorRepository.deleteAuthorById(id);
    if (!deleteAuthorById) {
      throw new Error("Author could not be deleted.");
    }
    return deletedAuthor;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  saveAuthor,
  updateAuthorById,
  deleteAuthorById,
};
