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

app.post('/signin', function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let tiem = Date.now();
    // let ref = db.collection("message").doc("nsHgAqrBXMU9eatAoQ61");
    let ref = db.collection("message");

    ref.where("email", "=", email).get().then(function(snapshot){
        if (snapshot.empty) {
            res.send("Error");
        } else {
            let user =  snapshot.docs[0].data();
            if (user.password == password) {
                res.send("log OK");
            } else {
                res.send("password Error");
            }
        }
    }).catch(function(error){
        res.send("Error");
    });

    // ref.get().then(function(snapshot){
    //     let data = []
    //     snapshot.forEach(function(docRef){
    //         data.push(docRef.data());
    //     });
    //     res.send(data);
            
    // }).catch(function(error){
    //     res.setDefaultEncoding("Error");
    // });
    // ref.add()

});

app.post('/signup', function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let time = Date.now();
    // let ref = db.collection("message").doc(time.toString());
    // ref.set({
    //     email: email,
    //     password: password,
    //     time: time

    // },{merger: true}).then(function(){
    //     res.send("OK");
    // }).catch(function(){
    //     res.send("Error");
    // });

    let ref = db.collection("message");


    ref.where("email", "=", email).get().then(function(snapshot){
        if (snapshot.empty) {
            ref.add({
                email: email,
                password: password,
                time: time
            }).then(function(){
                res.send("OK");
            }).catch(function(){
                res.redirect("./form.html");
            });
        
        } else {
           
            res.send("email duplicates");
        }
    }).catch(function(error){
        res.send("Error");
    });





    ref.add({
        email: email,
        password: password,
        time: time
    }).then(function(){
        res.send("OK");
    }).catch(function(){
        res.redirect("./form.html");
    });



    // res.send(email + ',' + password);


});

app.listen(3000, function(){
    console.log("server started");
    });