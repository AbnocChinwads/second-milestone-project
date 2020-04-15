var score = 0;
var level = 0;

$("#score").html(`${score}`);
$("#level").html(`${level}`);

$("#start-button").on("click", function() {
    var buttons = document.getElementsByClassName("js-button");
    var buttonsToClick = chooseRandomButtons(buttons);
    currentButtons = buttonsToClick;
    flashButtons(buttonsToClick, 0);
    level += 1;
    $("#level").html(`${level}`);

  var currentOrder = 0;
  $(".js-button").off("click").on("click", function() {
    var selectedButton = $(this)[0];
    var button = currentButtons[0];
    if (selectedButton === button) {
        currentButtons.splice(button,1);
        score += 1;
        $("#score").html(`${score}`);
        if (score == 4) {
            alert("Well done! Click start to begin the next level");
        } else if (score == 8) {
            alert("Well done! Click start to begin the next level");
        } else if (score == 13) {
            alert("Well done! Click start to begin the next level");
        } else if (score == 18) {
            alert("Well done! Click start to begin the next level");
        }
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

function chooseRandomButtons(buttons) {
    var buttonsToClick = [];
    var maxRandomNumber = buttons.length - 1;
    if (score >= 8) {
        for (var i = 0; i < 5; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }    
    } else if (score >= 18) {
        for (var i = 0; i < 6; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 30) {
        for (var i = 0; i < 7; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 44) {
        for (var i = 0; i < 8; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 60) {
        for (var i = 0; i < 9; i++) {
            buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
        }
    } else if (score >= 78) {
        for (var i = 0; i < 10; i++) {
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

function flashButtons(buttonsToClick, index) {
    setTimeout(function() {
        $(buttonsToClick[index]).fadeOut(500).fadeIn(500);
        if (index === buttonsToClick.length - 1) {
            return;
        }
        flashButtons(buttonsToClick, index = index + 1);
    }, 1000);
}