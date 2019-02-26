const characters = [
  {
    characterName: "Leslie Knope",
    playedBy: "Amy Poehler",
    jobTitle: "assistant manager",
    department: "parks and rec",
    bestFriend: "Ann Perkins"
  },
  {
    characterName: "Ron Swanson",
    playedBy: "Nick Offerman",
    jobTitle: "manager",
    department: "parks and rec",
    bestFriend: "bacon and eggs"
  },
  {
    characterName: "Ann Perkins",
    playedBy: "Rashida Jones",
    jobTitle: "nurse",
    department: "hospital",
    bestFriend: "Leslie Knope"
  }
];

const getAllCharacters = () => {
  return characters;
};

const getCharactersByCharacterName = name => {
  return characters.find(character => character.characterName === name);
};

const getCharactersByDepartment = department => {
  return characters.filter(character => character.department === department);
};

module.exports = {
  getAllCharacters,
  getCharactersByCharacterName,
  getCharactersByDepartment
};
