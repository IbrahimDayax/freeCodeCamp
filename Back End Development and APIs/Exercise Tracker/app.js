const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
const filePath = __dirname + "/views/index.html";
const port = 3000;

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.get("/", (req, res) => res.sendFile(filePath));

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));
app.post("/api/users", (req, res) => res.send({username: req.body.username, id: "5fb5853f734231456ccb3b05"}));

app.listen(port, () => console.log("Express app is listening on port " + port));