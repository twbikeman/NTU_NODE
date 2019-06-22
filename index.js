let express = require("express");
let app = express()

app.get("/", function(req, res){
    console.log('method', req.method);
    console.log('hostname', req.hostname);
    console.log('path', req.path);
    console.log('ip', req.ip);
    lang = req.get("Accept-Language");
    if (lang.startsWith("en-US")) {
        res.send("No problem");
    } else {
    res.send("OK");
    }
});

app.get("/test.php", function(req, res){
    res.set("my-header","ok")
    let result = {x:3, y:4};
    res.json(result);
});



app.get("/pic.php", function(req, res){
    res.set("my-header","ok")
    res.download("./pic.jpg")
});


app.get("/get.php", function(req, res){
    res.send("Hello Response Object");

});

app.listen(3000, function(){
    console.log("server started");
    });