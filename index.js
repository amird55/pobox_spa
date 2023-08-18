const express = require('express');
const port = 5577;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//------------------------------------------------
let AllData=[];

//------------------------------------------------
app.get("/",(req, res) => {
    res.sendFile("./Views/spa_main.html", {root: __dirname});
});
app.get("/List",(req, res) => {
    let data=AllData;
    for(let k in data){
        data[k].idxOnServer=k;
    }

    res.send(data).json();
});
app.post("/Add",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pob;
    AllData.push(line);
    console.log(req.body);
    res.send("Ready to Add EndPoint");
});
app.post("/Add2",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pob;
    AllData.push(line);
    line={};
    line.name = req.body.name2;
    line.phone = req.body.phone2;
    line.pobox = req.body.pob;
    AllData.push(line);
    res.send("Ready to Add EndPoint");
});
app.post("/Delete",(req, res) => {
    let idx= req.body.idx;
    console.log("del",idx);
    AllData.splice(Number(idx),1);
    res.send("Ready to Delete");
});
app.post("/Update",(req, res) => {
    let idx=req.body.idx;
    AllData[idx].name = req.body.name;
    AllData[idx].phone = req.body.phone;
    AllData[idx].pobox = req.body.pob;
    res.send("updated");
});

//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});
