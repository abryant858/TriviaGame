//I got really stuck on this assignment and had to redo it several times. Had difficulty getting the value of the button
//element so that I could compare it versus the value of the answers index to determine if the answer selection was 
//correct or incorrect. That is where I spent all my time and neglected the css and html files. 

//Declaring variables
var time = 15
var correctQuestions = 0
var wrongQuestions = 0
var currentQuestion 
var currentChoices
var index = 0
//Object array which holds the trivia qustions, answers and choices.
var trivia = [{
    question: 'THE MOST LEGENDARY SHIP IN THE GALAXY, THE MILLENNIUM FALCON, CAN COMFORTABLY FIT HOW MANY PEOPLE IN THE COCKPIT?',
    answer: 'Four',
    choices: ['Four', 'Three', 'Six', 'Eight']
}, {
    question: 'ADMIRAL RADDUS AND ADMIRAL ACKBAR BOTH HAIL FROM WHICH PLANET?',
    answer: 'Mon Cala',
    choices: ['Mon Cala', 'Galalenta', 'Ryltoh', 'Coruscant']
}, {
    question: 'R2-D2 IS CLASSIFIED AS WHAT TYPE OF DROID?',
    answer: 'Astromech Droid',
    choices: ['Protcol Droid', 'Battle Droid', 'Labor Droid', 'Astromech Droid']
}, {
    question: 'HOW MUCH TOTAL DOES OBI-WAN KENOBI AGREE TO PAY HAN SOLO FOR SAFE PASSAGE TO ALDERAAN?',
    answer:'17,000 Credits',
    choices: ['10,000 Credits', '2,000 Credits', '17,000 Credits', '23,000 Credits']
}, {
    question: 'WHICH HANDMAIDEN OF QUEEN PADMÉ AMIDALA SERVED AS DECOY FOR THE QUEEN?',
    answer: 'Sabe',
    choices: ['Eitae', 'Sabe', 'Rabe', 'Sache']
}, {
    question: 'WHILE SERVING AS A STORMTROOPER, FINN WAS KNOWN AS:',
    answer: 'FN-2187',
    choices: ['FN-2187', 'FN-2199', 'FN-2000', 'FN-2003']
}, {
    question: 'POE DAMERON WAS RAISED ON WHICH PLANET?',
    answer: 'Yavin 4',
    choices: ['Alderan', 'Tatooine', 'Dantooine', 'Yavin 4']
}, {
    question: 'APPROXIMATELY HOW MANY FORMS OF COMMUNICATION DOES C-3P0 KNOW?',
    answer: 'More than 7,000,000',
    choices: ['More than 100,000', 'More than 7,000,000', 'More than 3,000,000', 'More than 500,000']
}, {
    question: 'WHICH CRIME IS NOT FOUND ON JYN ERSO’S RAP SHEET?',
    answer: 'Impersonating a Stormtrooper',
    choices: ['Forging Imperial documents', 'Shipjacking', 'Petty Theft', 'Impersonating a Stormtrooper']
}, {
    question: 'AT THE END OF EPISODE VII, REY FINDS LUKE SKYWALKER AND SAYS WHAT?',
    answer: 'She does not say anything',
    choices: ['I need your help', 'I found you', 'May the force be with you', 'She does not say anything']
}]
//Function to run the game and its functions
//Once all quesitons have been answered, display number of correct and incorrect guesses.
function game() {
    console.log(index)
    checkAnswer()
    index++
    displayTrivia()
    renderButtons()
    time = 15
    
}
console.log(index)

//Tracks time remaining to answer questions.
timer()
function timer() {
    var counter = setInterval(function() {
        $('.time-left').text(time)
        time--
        if (time < 0) {
            clearInterval(counter)
        }
    }, 1000);
} 
console.log(timer())
//Idealy this function would check the value of the element versus the value of the answers index in the object array.
function checkAnswer() {
    if (index === index && $('.guess').val() === 0) {
        correctQuestions++
    } else {
        wrongQuestions++
    }   
}
//Functions displays trivia question 
function displayTrivia() {
    $('.trivia-question').empty()   
    $('.trivia-question').text(trivia[index].question)
    console.log(trivia[0].question)
}
//Function creates buttons for choices
function renderButtons() {
    var i = 0 
        $('.answer-choices').empty()
        trivia[index].choices.forEach(function(choices) {
          var button = $('<button>' + choices + '</button>')
          button.addClass('guess')
          button.attr('value', i)
          $('.answer-choices').append(button)
          i++
          console.log(i)
        })
      }
//Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".guess", game);

//Used to start off game with qusetions and chioces
displayTrivia()
renderButtons()