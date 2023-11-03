const Author = require("../models/Author");

const getAllAuthors = async () => {
  try {
    const authors = await Author.find();
    return authors;
  } catch (error) {
    throw new Error("Error while fetching the author data.");
  }
};

module.exports = {
  getAllAuthors,
};
