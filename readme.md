https://training.pada-x.com/

csie_guest
guest_1IDUC
G99TYJKG

let -> block-based
var -> function-based

promise:
.then(function(){}).catch(function(error){});

dalayedAdd(3,4,2000, runction(result){console.log(result);});

1. install Node.js

LTS -> long term support

node -v

HTML DOM (document object model)

__dirname
console.log(__dirname)

require()

module.exports = result;


module.exports = function(more) {return result + more};

npm init -y

npm install X --save

--save
"dependencies:{}"


app.listen(3000, function(){
    console.log("server started");
    });


aws

res.json()

command + option + i

req.method
req.hostname
req.path
req.ip
req.get("Accept-Language")

res.download()

.startsWith("zh")

?parameter=?

res.download("./imgs/" + filename);

app.get("/picture/:filename", fucntion(req, res){});


res.sendFile(); <--- absolute path

app.use(express.static("public"));


eq.query.?

app.post()

req.body.?

let parser = require("body-parser");

app.use(parser.urlencoded({extended:true}));


let admin = require("firebase-admin");

let serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject0520.firebaseio.com"
});


.collection()
.doc()


.then()
.catch()

ref.set({},{merger: true});


let ref = db.collection("message");
ref.add();

serverless

onclick = "post();"

let name = document.querySelector("#name").value;

window.addEventListener("load", get);
