const express = require("express");
const { default: mongoose } = require("mongoose");

const authorRoutes = require("./routes/AuthorRoutes");
const bookRoutes = require("./routes/BookRoutes");

var app = express();

app.use(express.json());

app.use("/authors/", authorRoutes);
app.use("/books/", bookRoutes);

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/library_management?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    app.listen(8081);
  } catch (error) {
    console.error("Error starting the server: ", error);
  }
}

startServer();
