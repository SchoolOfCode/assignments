const express = require("express");

const parksAndRec = require("./info");

const PORT = process.env.PORT || 3000;

const app = express();

// 1. write a get route '/characters' that returns all characters
// 2. write a get route '/characters' which accepts a name as an extra url param and returns a specific character based on the parameter
// 3. amend the get route '/characters' so that it additionally accepts a query argument `filter` which filters the returned character list by department

app.get("/characters", (req, res) => {
  let filter = req.query.department;
  if (!filter) {
    let allCharcters = parksAndRec.getAllCharacters();
    return res.json({ payload: allCharcters, successful: true });
  }
  let charctersbyDepartment = parksAndRec.getCharactersByDepartment(filter);
  res.json({ payload: charctersbyDepartment, successful: true });
});

app.get("/characters/:characterName", (req, res) => {
  let { characterName } = req.params;
  let charctersbyCharacterName = parksAndRec.getCharactersByCharacterName(
    characterName
  );
  if (!charctersbyCharacterName) {
    return res.json({ payload: [], successful: false });
  }
  res.json({ payload: [charctersbyCharacterName] });
});

app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});

// app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile("index.html", err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("sent");
//   });
// });
