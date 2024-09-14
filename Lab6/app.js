const questions = [
  {
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'None of the above',
    'correct': 'a'
  },
  {
    'que': 'Which language is used for styling web pages?',
    'a': 'HTML',
    'b': 'jQuery',
    'c': 'CSS',
    'd': 'XML',
    'correct': 'c'
  },
  // {
  //   'que': 'Which of the following is a JavaScript framework?',
  //   'a': 'React',
  //   'b': 'Laravel',
  //   'c': 'Django',
  //   'd': 'Flask',
  //   'correct': 'a'
  // },
  // {
  //   'que': 'Which is not a programming language?',
  //   'a': 'Python',
  //   'b': 'HTML',
  //   'c': 'Java',
  //   'd': 'C++',
  //   'correct': 'b'
  // },
  // {
  //   'que': 'Which HTML tag is used to define an unordered list?',
  //   'a': '<ol>',
  //   'b': '<ul>',
  //   'c': '<li>',
  //   'd': '<dl>',
  //   'correct': 'b'
  // },
  // {
  //   'que': 'Which of the following is used for connecting to a database?',
  //   'a': 'HTML',
  //   'b': 'PHP',
  //   'c': 'CSS',
  //   'd': 'JavaScript',
  //   'correct': 'b'
  // },
  // {
  //   'que': 'Which of the following is a NoSQL database?',
  //   'a': 'MySQL',
  //   'b': 'MongoDB',
  //   'c': 'PostgreSQL',
  //   'd': 'SQLite',
  //   'correct': 'b'
  // },
  // {
  //   'que': 'Which symbol is used for comments in JavaScript?',
  //   'a': '/* */',
  //   'b': '//',
  //   'c': '<!-- -->',
  //   'd': '#',
  //   'correct': 'b'
  // },
  // {
  //   'que': 'Which of the following is a backend programming language?',
  //   'a': 'Node.js',
  //   'b': 'React',
  //   'c': 'Vue',
  //   'd': 'Bootstrap',
  //   'correct': 'a'
  // },
  // {
  //   'que': 'What does CSS stand for?',
  //   'a': 'Cascading Style Sheets',
  //   'b': 'Colorful Style Sheets',
  //   'c': 'Computer Style Sheets',
  //   'd': 'Creative Style Sheets',
  //   'correct': 'a'
  // }
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
let quesBox = document.getElementById("questionBox");
let options = document.querySelectorAll(".option");

// Load the current question
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }

  reset();
  const data = questions[index];
  quesBox.innerHTML = `${index + 1}) ${data.que}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
};

// Get the selected answer
const getAnswer = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// Submit the quiz
const submitQuiz = () => {
  if (index >= total) {
    return endQuiz(); // Stop if quiz is complete
  }

  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
};

// Reset the selected option
const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

// End the quiz and show the results
const endQuiz = () => {
  document.querySelector(".container").innerHTML = `<div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>
    <button onclick="restartQuiz()">Restart Quiz</button>
  </div>`;
};

// Restart the quiz
const restartQuiz = () => {
  index = 0;
  right = 0;
  wrong = 0;

  // Restore the original HTML structure for the quiz
  document.querySelector(".container").innerHTML = `
    <div class="col">
        <h3 id="questionBox"></h3>
    </div>
    <div class="col box">
        <input class="option" type="radio" name="option" id="first" value="a" required>
        <label for="first"></label>
    </div>
    <div class="col box">
        <input class="option" type="radio" name="option" id="second" value="b" required>
        <label for="second"></label>
    </div>
    <div class="col box">
        <input class="option" type="radio" name="option" id="third" value="c" required>
        <label for="third"></label>
    </div>
    <div class="col box">
        <input class="option" type="radio" name="option" id="fourth" value="d" required>
        <label for="fourth"></label>
    </div>
    <button class="restart-btn" onclick="submitQuiz();">Submit</button>
  `;

  // Reinitialize the questionBox and options variables
  quesBox = document.getElementById("questionBox");
  options = document.querySelectorAll(".option");

  // Load the first question again
  loadQuestion();
};

// Initial call to load the first question
loadQuestion();


