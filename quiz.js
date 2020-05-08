const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");

let currentQuestion = {};
let acceptanswer = false;
let scoreCount = 0;
let questionCount = 0;
let availableQuestions = [];

//LIST OF ALL QUESTIONS STORED IN AN ARRAY OF OBJECT
let questions = [
  {
    question: "How is COVID-19 passed on?",
    option1: "Through droplets that come from your mouth and nose when you cough or breathe out",
    option2: "In sexual fluids, including semen, vaginal fluids or anal mucous",
    option3: "By drinking unclean water",
    option4: "All of the above",
    answer: 1
  },
  {
    question: "What are the common symptoms of COVID-19?",
    option1: "A new and continuous cough",
    option2: "Fever",
    option3: "Tiredness",
    option4: "All of the above",
    answer: 4
  },
  {
    question: "Which of the following people is COVID-19 most dangerous for?",
    option1: "Children",
    option2: "Older people – especially those aged 70 and above",
    option3: "People with certain underlying health conditions",
    option4: "European people",
    answer: 3
  },
  {
    question: "Are people living with HIV always more at risk?",
    option1: "Yes – people with HIV have weaker immune systems",
    option2: "No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk",
    option3: "Maybe",
    option4: "Not sure",
    answer: 2
  },
  {
    question: "Should you wear a mask to protect yourself when you go outside?",
    option1: "Yes – Wear a mask at all times to prevent COVID-19",
    option2: "No – You don’t need to wear a mask if you’re healthy and not caring for a sick person",
    option3: "Maybe",
    option4: "Not sure",
    answer: 2
  },
  {
    question: "Can you always tell if someone has COVID-19?",
    option1: "No – not everyone with COVID-19 has symptoms",
    option2: "Yes – it will be obvious, a person with COVID-19 coughs a lot",
    option3: "Maybe",
    option4: "Yes – you can tell just by where a person comes from, their race and ethnicity",
    answer: 1
  },
  {
    question: "Can washing your hands protect you from COVID-19?",
    option1: "Yes – but only if you use a strong bleach",
    option2: "Yes – washing with normal water is enough",
    option3: "Yes – normal soap and water or hand sanitizer is enough",
    option4: "No – Washing your hands doesn’t stop COVID-19",
    answer: 3
  },
  {
    question: "Can COVID-19 be cured?",
    option1: "Yes – Alcoholic drinks can cure COVID-19",
    option2: "Yes – with chloroquinine",
    option3: "No – COVID-19 is a God's punishment on the human race",
    option4: "No – but most people get better by themselves",
    answer: 4
  },
  {
    question: "Which of the following is an example of physical distancing?",
    option1: "You stop going to crowded places and visiting other people’s houses",
    option2: "You stop talking to the people you live with",
    option3: "You stop making video calls",
    option4: "You stop speaking to your friends on the phone",
    answer: 1
  },
  {
    question: "How can people living with HIV protect themselves from COVID-19?",
    option1: "Wash their hands regularly and follow the physical distancing advice",
    option2: "Keep taking their antiretroviral treatment",
    option3: "Exercise regularly, eat well and look after their mental health",
    option4: "All of the above",
    answer: 4
  }
];

//MAXIMUM NUMBER OF QUESTIONS AND SCOREPOINTS FOR EACH CORRECT ANSWER
const scorePoint = 20;
const maxQuestions = 5;

//STARTGAME FUNCTION
startGame = () => {
  scoreCount = 0;
  questionCount = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

//TO GET MAXIMUM OF 5 QUESTIONS
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCount >= maxQuestions) {
    //SAVE USER'S SCORE IN BROWSER
    localStorage.setItem("mostRecentScore", scoreCount);

    //GO TO THE RESULT PAGE
    return window.location.assign("end.html");
  }

//BUILDING THE QUESTION COUNTER
  questionCount++;
  questionCounter.innerHTML = questionCount + "/" + maxQuestions;

//TO GET RANDOM QUESTIONS
  const pickQuestion = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[pickQuestion];
  question.innerText = currentQuestion.question;

//SELECTING AN ANSWER
  options.forEach(option => {
    const dataNumber = option.dataset["number"];
    
    option.innerText = currentQuestion["option" + dataNumber];
  })

//FOR US NOT TO REPEAT PICKING SAME QUESTION
  availableQuestions.splice(pickQuestion, 1);

  acceptanswer = true;
};

//TO SELECT AND VERIFY CORRECT ANSWERS
options.forEach(option => {
  option.addEventListener("click", e =>{
    if (!acceptanswer) return;
    acceptanswer = false;

    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

//VERIFYING ANSWERS
    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedOption.parentElement.classList.add(classToApply);

    if(classToApply === "correct") {
      incrementScoreCount(scorePoint);
      selectedOption.parentElement.classList.add(classToApply);
    }

    setTimeout(() => {
      selectedOption.parentElement.classList.remove(classToApply);

      document.getElementById("next").addEventListener("click", getNewQuestion);
    }, 1000);
  });
});

//INCREMENTING THE SCORE ON THE SCORE COUNTER
incrementScoreCount = num => {
  scoreCount += num;
  scoreCounter.innerHTML = scoreCount;
}

//CALLING MY STARTGAME FUNCTION
startGame();