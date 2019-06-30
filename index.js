let admin = require("firebase-admin");
let serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject0520.firebaseio.com"
});
let db = admin.firestore();
let express = require("express");
let app = express()
let parser = require("body-parser");
app.use(express.static("public"));
app.use(parser.urlencoded({extended:true}));


app.post("/postMessage", function(req, res){
    let name  = req.body.name;
    let content = req.body.content;
    // let time = Date.now();
    let ref = db.collection("message");
    ref.add({name: name, content: content}).then(function() {
        res.send("Ok");
    }).catch(function(error) {
        res.send("error");
    });
});

app.get("/getMessages", function(req, res){
    let ref = db.collection("message");
    ref.get().then(function(snapshot){
        let data = [];
        
    });
});


app.listen(3000, function(){
    console.log("server started");
    });