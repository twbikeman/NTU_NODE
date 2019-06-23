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



// app.get("/", function(req, res){
//     console.log('method', req.method);
//     console.log('hostname', req.hostname);
//     console.log('path', req.path);
//     console.log('ip', req.ip);
//     lang = req.get("Accept-Language");
   
//     res.send('<img src="./pic.php?name=pic.jpg">');
   
// });

// app.get("/picture/:name", function(req, res){
//     let filename = req.params.name;
//     res.download("./picture/" + filename);


// });

  
// app.get("/pic.php", function(req, res){
//     res.set("my-header","ok")
//     let name = req.query.name;
//     res.download("./" + name);
// });

// app.get("/", function(req, res){

//     res.sendFile(__dirname + "/home.html");
// });

// app.get("/get.php", function(req, res){
//     res.send("Hello Response Object");

// });

app.use(express.static("public"));

app.use(parser.urlencoded({extended:true}));

app.post('/signup', function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let ref = db.collection("message").doc("test");
    ref.set({
        email: email,
        password: password

    });
    res.send(email + ',' + password);


});

app.listen(3000, function(){
    console.log("server started");
    });