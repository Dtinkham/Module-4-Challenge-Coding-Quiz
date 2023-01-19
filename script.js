//Pulling Var from HTML
var startButton = document.querySelector("#start-button")
var submitButton = document.querySelector("#submit")
var communication = document.querySelector("#communication-box")
var results = document.querySelector("#results")
var timerText = document.querySelector("#timer-count")
var labelResults = document.querySelector("#label-results")
var highScores = [0]
var highScoreMessage = document.querySelector("#highscore-results")


//Declaring vars
var timerCount = 30
var score = 0



//Arrays for Qs and As
const questions= ["What does 'URL' stand for?","What language is used to create dynamic and interactive web content like applications and browsers?","Which language stands for 'HyperText Markup Language'?","What language is used to style a webpage?","What is a set of statements that performs a task or calculates a value?","This enables storing of a collection of multiple items under a single variable name"]
const answers= ["uniform resource locator","javascript","html","css","function","array"]




//Function generates a question/answer and displays the question
function getQuestion() {
    num = Math.floor(Math.random() * questions.length);
    
    chosenQuestion = questions[num]
    correctAnswer = answers[num]
    communication.textContent = chosenQuestion
    return correctAnswer
}
    
function testQuestion() {
    result = "" 
        var userInput = document.querySelector("#user-input").value
            //Changes submission to lowercase
            submittedAnswer = userInput.toLowerCase()
            var count = 0

            //if else to keep score or dock time
            if(submittedAnswer === correctAnswer) {
                result = "Correct!"
                count++ 
                
            }
            else {
                result = "Incorrect!"
                timerCount = timerCount - 5
                
            }
            results.textContent = score
            getQuestion()
            score = count
            
}

//function not working properly: Returning Null for initials and 0 for highestScore when ran through gameover()

// function HighScore() {
//    highScores.push(score)
//     highestScore = 0

//     for (i=0;i<highScores.lenghth; i++) {
//         if (highScores[i] < score) {
//             highestScore == score
//             return highestScore
//         }
//     }
//     return highestScore
//   }

function gameover() {
    HighScore()
    results.textContent = "Your Score is "+score+"!"
    highScoreMessage.textContent = initials + " " + highestScore

    

  }


// starts and stops the timer & triggers gameover() when time runs out
function startTimer() {
    // Sets timer
    var timer = setInterval(function() {
      timerCount--;
      timerText.textContent = timerCount

      // Tests if time has run out
      if (timerCount === 0) {
         //Clears interval
        clearInterval(timer);
        gameover();
      }
    }, 1000);
  }



  
//Begins the game
  startButton.addEventListener("click",function() {
    startButton.disabled = true;
    startTimer()
    getQuestion()
    var initials = document.querySelector("#initials").value
    return initials
  })

//Submits Answer and compares to correct answer
  submitButton.addEventListener("click",function(){
    testQuestion() 
    
  }
  )



//TO DO:

//Add more Questions or stop them from repeating immediatly
   
  //edit submit button to clear after submission and work with enter key

  //Create initials and Highscore: JS Variables, HTML placement, 

  //CSS

  //finish commenting out text

  // readme file with pic of this time