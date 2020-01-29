const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static("static"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/index")(app);

app.listen(3003, function() {
  console.log("run:3003");
});
 