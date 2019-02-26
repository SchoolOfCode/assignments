const getCatergories = () =>
  fetch("https://opentdb.com/api_category.php")
    .then(res => res.json())
    .then(payload => {
      displayCategories(payload.trivia_categories);
    });

const displayCategories = catergoriesArray => {
  catergoriesArray.forEach(itm => {
    const titleNode = document.createElement("p");
    const text = document.createTextNode(itm.name);
    const scoreNode = document.createElement("span");
    const scoreText = document.createTextNode("0");
    scoreNode.appendChild(scoreText);
    titleNode.appendChild(text);
    titleNode.appendChild(scoreNode);
    titleNode.setAttribute("data-categoryNumber", itm.id);
    titleNode.setAttribute("class", "button");
    root.appendChild(titleNode);
  });
};

let currentQuestionSet = [];
let questionIndex = 0;
let overallScore = 0;
// let Score = 0;

const getQuestions = id =>
  fetch(`https://opentdb.com/api.php?amount=5&category=${id}&encode=url3986`)
    .then(res => res.json())
    .then(payload => {
      if (payload.response_code === 0) {
        console.log(payload);
        currentQuestionSet = payload.results;
        return displayQuestion(payload.results[0], 0);
      }

      throw Error("Oops");
    })
    .catch(error => console.error(error));

const displayQuestion = currentQuestion => {
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";
  const question = document.createElement("h1");
  const text = document.createTextNode(
    decodeURIComponent(currentQuestion.question)
  );
  question.appendChild(text);
  questionContainer.appendChild(question);

  const answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers
  ];
  answers.forEach((itm, idx) => {
    const answerNode = document.createElement("p");
    const text = document.createTextNode(decodeURIComponent(itm));
    answerNode.appendChild(text);
    answerNode.setAttribute("data-answer", decodeURIComponent(itm));
    answerNode.setAttribute("class", "answer");
    questionContainer.appendChild(answerNode);
  });

  questionContainer.style.display = "block";
};

const updateScores = () => {
  document.getElementById("score").innerHTML = overallScore;
};

const nextQuestion = answer => {
  const currentAns = decodeURIComponent(
    currentQuestionSet[questionIndex].correct_answer
  );
  if (answer === currentAns) {
    overallScore += 1;
    updateScores();
  }
  if (questionIndex + 1 === currentQuestionSet.length) {
    questionContainer.style.display = "none";
    return;
  }
  displayQuestion(currentQuestionSet[questionIndex + 1]);
  questionIndex += 1;
};

document
  .getElementById("questionContainer")
  .addEventListener("click", event =>
    nextQuestion(event.target.attributes.getNamedItem("data-answer").value)
  );

document
  .getElementById("root")
  .addEventListener("click", event =>
    getQuestions(
      event.target.attributes.getNamedItem("data-categoryNumber").value
    )
  );

getCatergories();
