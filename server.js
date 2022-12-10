const mongoose = require("mongoose");
const app = require("./app");

const PORT = 3000;
const uriDb =
  "mongodb+srv://klapan:2VpZA4uf6aHQVSrP@cluster0.bqrd9iv.mongodb.net/contactbook-db?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
  });
