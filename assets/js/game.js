var score = 0;
var level = 0;
//Call high score from localStorage or display 0
var highScore = +localStorage.getItem("highScore") || 0;
var difficulty = 4;

$("#score").html(`${score}`); //Display score on webpage
$("#level").html(`${level}`); //Display level on webpage
$("#high-score").html(`${highScore}`); //Display high score on webpage

//Game logic
$("#start-button").on("click", function() {
    var buttons = document.getElementsByClassName("js-button");
    var buttonsToClick = chooseRandomButtons(buttons);
    currentButtons = buttonsToClick;
    flashButtons(buttonsToClick, 0);
    //if level count is 0 when the start button is pressed
    //increment level count by 1
    if (level == 0) {
        level += 1;
        $("#level").html(`${level}`);
    }

  var currentOrder = 0;
  $(".js-button").off("click").on("click", function() {
    var selectedButton = $(this)[0];
    var button = currentButtons[0];
    //Check input matches array
    if (selectedButton === button) {
        currentButtons.splice(button,1);
        //When a correct input is recorded, increment score & high score by 1
        score += 1;
        //if the score is greater than the high score
        //increase high score by 1 and save it to localStorage
        if (score > highScore) {
            highScore += 1;
            //Set persistent high score through page loads
            localStorage.setItem("highScore", highScore);
        }


        $("#score").html(`${score}`);
        $("#high-score").html(`${highScore}`);
        
        //Display win message if you reach the end of the array
        if (currentButtons.length === 0) {
            alert("Well done! Click start to begin the next level");
            //Increase level count at the end of every level
            level += 1;
            $("#level").html(`${level}`);
            }
    //Display restart message if input does not match array
    } else {
        currentButtons = buttonsToClick;
        alert("Sorry, that was wrong. Click 'Start' to try again");
        //Reset score and level count to 0 on a failed match
        score = 0;
        level = 0;
        difficulty = 4;
        $("#score").html(`${score}`);
        $("#level").html(`${level}`);
    }
  });

})

//Random array functions
function chooseRandomButtons(buttons) {
    var buttonsToClick = [];
    var maxRandomNumber = buttons.length - 1;
    //Increase difficulty when a certain score is reached
    //every two iterations at new difficulty level
    if (level % 2 == 1 && level > 1) {
        difficulty += 1;

    }
    for (var i = 0; i < difficulty; i++) {
    buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
    
}

    return buttonsToClick;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Controls how fast the buttons flash
//and how soon after the 'start' button is pushed the first one flashes
function flashButtons(buttonsToClick, index) {
    setTimeout(function() {
        $(buttonsToClick[index]).fadeOut(500).fadeIn(500);

        if (index === buttonsToClick.length - 1) {
            return;
        }
        flashButtons(buttonsToClick, index = index + 1);
    }, 1000 ); //Time between pressing 'start' and the first button flash
}