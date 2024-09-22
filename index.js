// STARTING SERVER WITH NODE
// let http = require("http");

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type':'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// const assert = require("assert").strict;

require('dotenv/config'); 

app.use(express.json());
const PORT = process.env.PORT;

const cors = require('cors')
const mongoose=require("mongoose");
app.use(cors())

// for specified origins
// let corsOptions = {
//   origin : ['http://localhost:5500'],
// }

// app.use(cors(corsOptions))

// To expire the session after 1 min of inactivity in the express-session of Express.js
// const session = require('express-session')


// app.use(
//   session({
  
//       // It holds the secret key for session
//       secret: "I am girl",

//       // Forces the session to be saved
//       // back to the session store
//       resave: true,

//       // Forces a session that is "uninitialized"
//       // to be saved to the store
//       saveUninitialized: false,
//       cookie: {

//           // Session expires after 1 min of inactivity.
//           expires: 60000
//       }
//   })
// );

// Centralized error handling middleware
 const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
}

app.use(errorHandler);

const {origin} = require('./controllers/controller.my');
// try {
//   assert(1)
//   console.log("No error Occurred");
// } catch(error) {
//   console.log("Error:", error)
// }
// static files
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'Static Files')))
// res.sendFile(path.join(__dirname,'image.jpg'));

app.get('/', origin);


// auth
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));

// // Below all the app.use methods
// app.use(session({
//     secret : "any long secret key",
//     resave : false,
//     saveUninitialized : false
// }));


// app.use(session({
//   secret: "any long secret key",
//   resave: false,
//   saveUninitialized: false
// }));

// // Initializing Passport
// app.use(passport.initialize());

// // Starting the session
// app.use(passport.session());

// // Creating user schema and adding a plugin to it

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String
// });
// userSchema.plugin(passportLocalMongoose);

// const User = new mongoose.model("User", userSchema);
// passport.use(User.createStrategy());

// // Serializing and deserializing
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



// Use bcryptjs module 
// const bcrypt = require("bcryptjs"); 

// // Store the password into variable 
// const password = "password123"; 

// // Use bcrypt.hash() function to hash the password 
// bcrypt.hash(password, 8, (err, hashedPassword) => { 
// 	if (err) { 
// 		return err; 
// 	} 
	
// 	// Display the hashed password 
// 	console.log(hashedPassword); 
	
// 	// Use bcrypt.compare() function to compare 
// 	// the password with hashed password 
// 	bcrypt.compare(password, hashedPassword, (err, isMatch) => { 
// 		if( err ) { 
// 			return err; 
// 		} 
		
// 		// If password matches then display true 
// 		console.log(isMatch); 
// 	}); 
// }); 


app.listen(PORT, (req, res) => {
  console.log(`Server is  working at port ${PORT}`)
})

//REPL (READ, EVAL, PRINT, LOOP)