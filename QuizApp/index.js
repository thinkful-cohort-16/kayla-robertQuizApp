/* global $ */
'use strict';

/******************************************************** 
Step 1: Define objects & database 
********************************************************/

const QUESTIONS = [
  {question: 'Which NBA team did Michael spend the majority of his career?', 
    answer1: 'Chicago Bulls', 
    answer2: 'Washington Wizards', 
    answer3: 'Boston Celtics', 
    answer4: 'Phoenix Suns', 
    answer5: 'Los Angeles Lakers', 
    correct: 1, 
    userChoice: 0},
  {question: 'What position did he play?', 
    answer1: 'Point guard', 
    answer2: 'Center', 
    answer3: 'Power Forward', 
    answer4: 'Shooting guard', 
    answer5: 'Small Forward', 
    correct: 4 , 
    userChoice: 0},
  {question: 'Michael made a comeback in 2001. Which NBA team did he play for?', 
    answer1: 'Chicago Bulls', 
    answer2: 'Washington Wizards', 
    answer3: 'Boston Celtics', 
    answer4: 'Phoenix Suns', 
    answer5: 'Los Angeles Lakers', 
    correct: 2, 
    userChoice: 0},
  {question: 'Which college team did Michael play for?', 
    answer1: 'Duke', 
    answer2: 'USC', 
    answer3: 'University of North Carolina at Chapel Hill', 
    answer4: 'University of Maryland', 
    answer5: 'Memphis', 
    correct: 3 , 
    userChoice: 0},
  {question: 'How tall is Michael?', 
    answer1: '6’1’’', 
    answer2: '6’10’’', 
    answer3: '6’6’’', 
    answer4: '6’3’’', 
    answer5: '6’11’’', 
    correct: 3 , 
    userChoice: 0},
  {question: 'In the TV cartoon "ProStars", who co-starred with Michael?', 
    answer1: 'Ken Griffey Jr. & Barry Sanders', 
    answer2: 'Penny Hardaway & Shaquille O\'Neal', 
    answer3: 'Andre Agassi & Terrell Davis', 
    answer4: 'Bo Jackson & Wayne Gretzky', 
    answer5: 'Emmitt Smith & Hulk Hogan', 
    correct: 4, 
    userChoice: 0},  
  {question: 'In 2010, Michael became majority owner of which NBA team?', 
    answer1: 'Oklahoma City Thunder', 
    answer2: 'Houston Rockets', 
    answer3: 'Philadelphia 76ers', 
    answer4: 'Charlotte Bobcats', 
    answer5: 'Chicago Bulls', 
    correct: 4, 
    userChoice: 0},
  {question: 'Which of the following NBA players did NOT appear in the film Space Jam?', 
    answer1: 'Larry Bird', 
    answer2: 'Shawn Bradley', 
    answer3: 'Charles Barkley', 
    answer4: 'Muggsy Bogues', 
    answer5: 'Kobe Bryant', 
    correct: 5, 
    userChoice: 0},
  {question: 'What is Michael\'s career playoff scoring average?', 
    answer1: '30.12', 
    answer2: '29.57', 
    answer3: '33.45', 
    answer4: '35.05', 
    answer5: '29.93', 
    correct: 3, 
    userChoice: 0},
  {question: 'How many NBA Championships did Michael have?', 
    answer1: '6', 
    answer2: '10', 
    answer3: '4', 
    answer4: '8', 
    answer5: '3', 
    correct: 1, 
    userChoice: 0}];

const STORE = {
  currentView: 0,
  currentQuestion: 0,
  currentRadioButtonChoice: 0,
  currentScore: 0,
  lastQuestionAnswered: 0,
  lastQuestionCorrect: false,
  quizSummaryHTML:''
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/

function respondToUserButton() {
  console.log('`respondToUserButton`ran');
  //Set the currentView and what is next?
  //if currentView === 0
  //currentView = 1
  //call renderQuestions();
  //call renderQuizPage();
  //else if currentView === 1
  //currentView = 2
  //renderFeedback()
  //else if currentView === 2
  //if question===10 then currentView = 3
  //else currentView = 1
  //else if currentView === 3
  //currentView = 0
  //call renderQuizResults()


}

/******************************************************** 
 * Step 3: Define event listeners
 ********************************************************/

function handleUserButton() {
  $('.js-user-button').on('click', function() {
    console.log(STORE.currentView);
    respondToUserButton();
  });
  //updates the STORE 
  //call respondToUserButton(){}
}


function handleRadioButtonClicked() {
  console.log('`handleRadioButtonClick` ran');
  //wait on user to click 
  //update the STORE with current radio button choice

}

/******************************************************** 
* Utility housekeeping functions 
********************************************************/

function renderQuestions(currentView) {
  console.log('`renderQuestions` ran');
  console.log(STORE['currentView']);
  const nextQuestion = STORE['currentQuestion']++;
  console.log(nextQuestion);
  generateHTML();
  renderQuizPage();
  handleRadioButtonClicked();
  handleUserButton();
  //only if the STORE is on pages that show questions
}

function renderFeedback() {
  console.log('`renderFeedback` ran');
  //get current userChoice
  const userAnswer = QUESTIONS['userChoice'];
  if (userAnswer === QUESTIONS['correctAnswer']) {
    STORE.currentScore++;
  }
  renderQuizPage();
  handleUserButton();
  //compare to correctAnswer
  //update currentscore if necessary
  //STORE['correctAnswer'] = userChoice === QUESTIONS[0].userChoice;
  //renderQuizPage
  //call handleUserButton()
}

function renderQuizResults(currentView) {
  console.log('`renderQuizResults` ran');
    
  //generateHTML() --> loop through questions using map and compare last two fields
  //renderQuizPage
    
}

function renderQuizPage() {
  console.log('`renderQuizPage` ran');
  //generateHTML()
  //pulls data from STORE
}

function generateHTML() {
  console.log('`generateHTML` ran');
  //what view are we on?
  //
}

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {}


// Start the main loop when the web page finishes loading.
$(function(){
  handleUserButton();
  handleRadioButtonClicked();
  renderQuestions();
  renderFeedback();
  renderQuizResults();
  renderQuizPage();
});