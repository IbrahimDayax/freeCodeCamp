const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const filePath = __dirname + "/index.html";
app.get("/", (req, res) => res.sendFile(filePath));


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));
app.post("/api/users", (req, res) => res.send({username: req.body.username, id: "5fb5853f734231456ccb3b05"}));

app.listen(port, () => console.log("Express app is listening on port " + port));