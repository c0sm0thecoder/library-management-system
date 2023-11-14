const Author = require("../models/Author");

const getAllAuthors = async () => {
  try {
    const authors = await Author.find();
    return authors;
  } catch (error) {
    throw new Error("Error while fetching the author data.");
  }
};

const getAuthorById = async (id) => {
  try {
    const author = await Author.findById(id);
    return author;
  } catch (error) {
    throw new Error("Error while fetching the author data.");
  }
};

const saveAuthor = async (author) => {
  try {
    const savedAuthor = await Author.create(author);
    return savedAuthor;
  } catch (error) {
    throw new Error("Error while saving the author data.");
  }
};

const updateAuthorById = async (id, body) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, body);
    return updatedAuthor;
  } catch (error) {
    throw new Error("Error while updating the author.");
  }
};

const deleteAuthorById = async (id) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return deletedAuthor;
  } catch (error) {
    throw new Error("Error while deleting the author");
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  saveAuthor,
  updateAuthorById,
  deleteAuthorById,
};
