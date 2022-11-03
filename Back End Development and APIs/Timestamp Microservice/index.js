const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const filePath = __dirname + "/public/index.html";

app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers can't handle 204
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile(filePath));

app.get("/api/:date?", (req, res) => {
  let date;
  const inputDate = req.params.date;
  
  if (inputDate) {
      const unixDate = inputDate * 1; //convert string to num
      date = isNaN(unixDate) ? new Date(inputDate) : new Date(unixDate); //check if given date is in unix form or utc
  } else {
      date = new Date();
  }

  if (date != "Invalid Date") {
    res.send({ unix: date.getTime(), utc: date.toUTCString() });
  } else {
    res.send({ error : "Invalid Date" });
  }

});

app.listen(port, () => console.log("Express app is listening on port " + port));