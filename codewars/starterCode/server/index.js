// npm init
// in the package.json add start and "dev:start":"nodemon --inspect index.js" scripts

//npm i and require express, isomorphic-fetch and es6-promise

const app = "";
const PORT = "";

// this is to handle CORS issues, we'll explain later in the course
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, jwtToken"
  );
  next();
});

// return something when you hit the home route to make sure the server is running
app.get("/", function(_req, res) {
  res.json({ message: "hello world" });
});

// used by hosting services to check your server is running and gives you reports on it.
app.get("/health", function(_req, res) {
  res.json({ message: "You hit the health route" });
});

let users = [
  "aidanw549",
  "AlexNicolau",
  "brendanrichards73",
  "Codeama",
  "Aardeedev",
  "jaskaran_",
  "j0nnylester",
  "karenchahal",
  "lock7",
  "KMcG24",
  "Kira-Green",
  "liamjejohnson",
  "manumagalhaes",
  "mareena88",
  "mattwendzina",
  "OliviaWinteringham",
  "bromar2292",
  "Dot-Rhs",
  "robyn-SoC",
  "SahelaR",
  "Ropenfold",
  "mrbenbot",
  "WasimHamid"
];

// create a get route to '/users'
// in the callback have a list of codewars users
// fetch all userInfo
// then map over and extract - username, honor, rank, name, color, codeChallenges
// create and object and send back to the frontend

// listen on your port and log a success message in the console
