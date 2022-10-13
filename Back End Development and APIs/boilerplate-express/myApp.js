const express = require('express');
const app = express();
require('dotenv').config();

const filePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(filePath));

app.use((req, res, next) => {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
});

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
	if (process.env.MESSAGE_STYLE == "uppercase") {
		res.send({"message": "HELLO JSON"});
	} else {
		res.send({"message": "Hello json"});
	}
	});
	
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => res.send({
      time: req.time
    }));
    
app.get('/:word/echo', (req, res) => {
  res.send({echo: req.params.word});
});

app.get('/name', (req, res) => {
  res.send({name: req.query.first + " " +        req.query.last});
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.post("/name", (req, res) => {
	 res.send({name: req.body.first + " " + req.body.last});
});
	








































 module.exports = app;
