const tableData = document.querySelector("#data");

const showData = () => {
  tableData.innerHTML = "";
  getUserData().then(data => {
    const users = data.payload.sort(sortUsersByRank);
    users.map((user, index) => showUserData({ user, index }));
  });
};

const hideData = () => {
  tableData.innerHTML = "";
};

// HELPER FUNCTIONS
const sortUsersByRank = (a, b) => {
  const rankDiff = b.rank - a.rank;
  if (rankDiff === 0) {
    return b.honor - a.honor;
  }
  return rankDiff;
};

const getUserData = () =>
  fetch("http://localhost/users").then(res => res.json());

const showUserData = ({ user, index }) => {
  let row = document.createElement("tr");
  row.appendChild(makeTableDataItem(index + 1));
  row.appendChild(
    makeTableDataItem(
      `${user.username[0].toUpperCase()}${user.username.slice(1)}`
    )
  );
  row.appendChild(makeTableDataItem(displayRank(user.username)));
  row.appendChild(makeTableDataItem(user.rankName));
  row.appendChild(makeTableDataItem(user.honor));
  tableData.appendChild(row);
};

const makeTableDataItem = item => {
  let td = document.createElement("td");
  td.innerHTML = item;
  return td;
};

const displayRank = username =>
  `<img src="https://www.codewars.com/users/${username}/badges/large" alt="codewars badge showing username, rank and honor" />`;
