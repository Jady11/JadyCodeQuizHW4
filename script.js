// quiz variables
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer: "Alerts",
    },
    {
      title: "The condition in an if/else statement is enclosed within ______.",
      choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
      answer: "Parentheses",
    },
    {
      title: "Arrays in JavaScript can be used to store_____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      title:
        "String values must be enclosed within _______ when being assigned to variables",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
    },
    {
      title:
        "A very useful tool used during development and debugging for content",
      choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ];
  ​
  var questionsIndex = 0;
  var time = questions.length * 10;
  var timerId;
  ​
  // create variables for DOM
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var submitBtn = document.getElementById("submit");
  var startBtn = document.getElementById("start");
  var initialsEl = document.getElementById("initials");
  var feedbackEl = document.getElementById("feedback");
  ​
  function getQuestions() {
    var currentQuestion = questions[questionsIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
      choiceNode.textContent = choice;
      choicesEl.appendChild(choiceNode);
    });
  }
  ​
  getQuestions();