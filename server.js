const express = require("express");

const api = require("./routes/apiroutes");
const htmlJS = require("./routes/htmlroutes");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", api);
app.use("/", htmlJS);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);