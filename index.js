const express = require('express');
const port = 5533;
const app = express();
app.use(express.json());

//------------------------------------------------
app.get("/",(req, res) => {
    res.sendFile("./Views/spa_main.html", {root: __dirname});
});

//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});
