const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const filePath = __dirname + "/public/index.html";

app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static(__dirname + "/public")); // enable cors to allow remote testing by FCC

app.get("/", (req, res) => res.sendFile(filePath));




app.listen(port, () => console.log("Express app is listening on port " + port));