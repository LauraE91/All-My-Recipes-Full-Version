const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const protectedRoutes = require("./routes/api/protectedRoutes");
const listRoutes = require("./routes/api/list");
const recipeRoutes = require("./routes/api/recipes");
const userRoutes = require("./routes/api/users");
const emailRoute = require("./routes/api/email");
const passport = require("passport");
const keys = require("./config/keys");
const db = require("./config/keys").mongoURI;
//const port = process.env.port || 4000
const port = 4000;

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

//mongoURI
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console, "connection error:"));
dbConnection
  .once("open", () => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(function (req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
    return res.sendStatus(204);
  }

  return next();
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,append,delete,entries,foreach,get,has,keys,set,values,Authorization"
  );

  res.header("Content-Security-Policy", "script-src 'self'");
  next();
});

app.use(express.static("./client"));
app.use(express.static("./client/public"));
app.use(express.static("./client/src"));
app.use(express.static("./client/src/components"));

//app.use(express.static('client/src'));
// express.static is a piece of middleware that is built in to express. It serves static files. The path provided is relative to the api, so to be safe, I could use the absolute path ex:
//app.use('/static', express.static(path.join(__dirname, 'public')))
// More info on serving static files: https://expressjs.com/en/starter/static-files.html



app.use(protectedRoutes);
app.use(listRoutes);
app.use(recipeRoutes);
app.use(userRoutes);
app.use(emailRoute);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
