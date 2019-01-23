require("es6-promise").polyfill();
require("isomorphic-fetch");
const express = require("express");

const app = express();
const PORT = 80;

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, jwtToken"
  );
  next();
});

app.get("/", function(_req, res) {
  res.json({ message: `hello world` });
});

app.get("/users", function(_req, res) {
  let users = ["Petekachu", "maddocash", "leighwhite96"];

  let userInfo = users.map(user =>
    fetch(`https://www.codewars.com/api/v1/users/${user}`).then(res =>
      res.json()
    )
  );
  Promise.all(userInfo).then(data => {
    let payload = data.map(({ username, honor, ranks, codeChallenges }) => {
      let { name, color, rank } = ranks.overall;
      return {
        username,
        honor,
        rank,
        rankName: name,
        rankcolor: color,
        ...codeChallenges
      };
    });

    res.json({ payload });
  });
});

app.listen(PORT, function() {
  console.log(`I'm listening on ${PORT}`);
});
