const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const file = require("./data.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Getting airport code and return json of the filtered result
app.get("/:code", (req, res) => {
  const { code } = req.params;

  const check = file.filter((data) => {
    return data.iata_code == code;
  }); 

  res.json(check);
});







// Server listening
app.listen(port, () => {
  console.log("Server running on port " + port);
});
