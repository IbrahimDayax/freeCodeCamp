const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static(__dirname + "/public")); // enable cors to allow remote testing by FCC

const port = 3000;
const filePath = __dirname + "/public/index.html";
app.get("/", (req, res) => res.sendFile(filePath));


const requestIP = require("request-ip");
const ipMiddleware = (req, res, next) => {
    requestIP.getClientIp(req);
    next();
}
app.use(requestIP.mw());

app.get("/api/whoami", (req, res) => {
    const ipadress = req.clientIp;
    const language = req.acceptsLanguages();
    const software = req.get("User-Agent");
    res.send({
        ipadress: ipadress,
        language:language[0],
        software:software
    });
})




app.listen(port, () => console.log("Express app is listening on port " + port));
