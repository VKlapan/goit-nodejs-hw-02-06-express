const mongoose = require("mongoose");
const app = require("./app");

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const PORT = 3001;
const uriDb =
  "mongodb+srv://klapan:2VpZA4uf6aHQVSrP@cluster0.bqrd9iv.mongodb.net/contactbook-db?retryWrites=true&w=majority";

const connection = mongoose.connect(uriDb, {
  promiseLibrary: global.Promise,
  useUnifiedTopology: true,
});

connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`DB Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`DB Server not running. Error message: ${err.message}`)
  );
