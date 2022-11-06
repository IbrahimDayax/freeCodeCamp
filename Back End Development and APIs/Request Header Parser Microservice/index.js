const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static(__dirname + "/public")); // enable cors to allow remote testing by FCC

const filePath = __dirname + "/public/index.html";
app.get("/", (req, res) => res.sendFile(filePath));

app.get("/api/whoami", (req, res) => {
    const ipaddress = req.headers['client-ip'] || req.headers['x-forwarded-for'];
    const language = req.acceptsLanguages();
    const software = req.get("User-Agent");
    res.send({
        ipaddress,
        language,
        software
    });
})

app.listen(port, () => console.log("Express app is listening on port " + port));
