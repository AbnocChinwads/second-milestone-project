var score = 0;
var level = 0;
var highScore = 0;

$("#score").html(`${score}`); //Display score on webpage
$("#level").html(`${level}`); //Display level on webpage
$("#high-score").html(`${highScore}`); //Display high score on webpage

//Game logic
$("#start-button").on("click", function() {
    var buttons = document.getElementsByClassName("js-button");
    var buttonsToClick = chooseRandomButtons(buttons);
    currentButtons = buttonsToClick;
    flashButtons(buttonsToClick, 0);
    //Every time the start button is pressed, increment level count by 1
    level += 1;
    $("#level").html(`${level}`);

  var currentOrder = 0;
  $(".js-button").off("click").on("click", function() {
    var selectedButton = $(this)[0];
    var button = currentButtons[0];
    //Check input matches array
    if (selectedButton === button) {
        currentButtons.splice(button,1);
        //When a correct input is recorded, increment score by 1
        score += 1;
        highScore +=1;
        $("#score").html(`${score}`);
        $("#high-score").html(`${highScore}`);
        //Display win message if you reach the end of the array
        if (score == 111 || score == 100 || score == 98 || score == 88 || score == 78
            || score == 69 || score == 60 || score == 52 || score == 44 || score == 37
            || score == 30 || score == 24 || score == 18 || score == 13 || score == 8
            || score == 4) {
            alert("Well done! Click start to begin the next level");
            }
    //Display restart message if input does not match array
    } else {
        currentButtons = buttonsToClick;
        alert("Sorry, that was wrong. Click 'Start' to try again");
        score = 0;
        level = 0;
        $("#score").html(`${score}`);
        $("#level").html(`${level}`);
    }
  });

})

var saveScore = localStorage.setItem("saveScore", "1");

/*if(saveScore) {
    //Save high score in localStorage
    highScore;
    $("#high-score").html(`${highScore}`);
}*/

//Random array functions
function chooseRandomButtons(buttons) {
    var buttonsToClick = [];
    var maxRandomNumber = buttons.length - 1;
    //Increase difficulty when a certain score is reached
    //every two iterations at new difficulty level
    if (score >= 98) {
        for (var i = 0; i < 11; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 78) {
        for (var i = 0; i < 10; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }    
    } else if (score >= 60) {
        for (var i = 0; i < 9; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 44) {
        for (var i = 0; i < 8; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 30) {
        for (var i = 0; i < 7; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 18) {
        for (var i = 0; i < 6; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 8) {
        for (var i = 0; i < 5; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else {
        for (var i = 0; i < 4; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
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
        if (score >= 111) {
            //Buttons flash twice as fast after level 22
            $(buttonsToClick[index]).fadeOut(250).fadeIn(250);
        } else {
            $(buttonsToClick[index]).fadeOut(500).fadeIn(500);
        }
        if (index === buttonsToClick.length - 1) {
            return;
        }
        flashButtons(buttonsToClick, index = index + 1);
    }, 1000 ); //Time between pressing 'start' and the first button flash
}