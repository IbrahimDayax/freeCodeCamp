// import express module
const express = require("express");
// create an instance of express
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import body-parser
const bodyParser = require('body-parser');
// import cors
const cors = require("cors");
// apply cors middleware with success status of 200 for legacy browsers
app.use(cors({ optionSuccessStatus: 200 }));
// serve static files from public directory
app.use(express.static(__dirname + "/public"));

// define file path for views/index.html
const filePath = __dirname + "/views/index.html";
// set port to 3000
const port = 3000;
// load environment variables from .env file
require('dotenv').config();

// connect to MongoDB using environment variable MONGO_URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

// create user schema with username and log fields
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  log: [{
    description: {
      type: String
    },
    duration: {
      type: Number
    },
    date: {
      type: Date
    }
  }]
});

// create a User model from the user schema
const User = mongoose.model("User", userSchema);

// define a GET route for "/" to send the index.html file
app.get("/", (req, res) => res.sendFile(filePath));

// apply body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/users', (req, res) => {
  // search for a document matching the username
  User.findOne({
    username: req.body.username
  }, (err, userFound) => {
    if (err) {
      console.log(err.message);
    } else {
      // findOne() returns either **null** or a **document** matching the search
    if (userFound) {
      // if a document is found, return a message detailing how the name is not available
      res.send('username already taken');
    } else {
      // else create a document for the input username
      // detail log as an empty array
      const user = new User({
        username: req.body.username,
        log: []
      });
      // save the document in the database
      user.save().then(doc => res.send({username: doc.username, _id: doc._id})).catch(err => console.log(err.message));
    }
    }
  });
});

// define a GET route for "/api/users" to retrieve all users from the database
app.get('/api/users', (req, res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      // if no error, send the data
      res.send(docs);
    } else {
      // if error, send the error message
      res.send(err.message);
    } 
  });
});


app.post("/api/users/:id/exercises", (req, res) => {

});

app.listen(port, () => console.log("Express app is listening on port " + port));