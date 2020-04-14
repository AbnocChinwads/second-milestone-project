var score = 0;

$("#score").html(`${score}`);

$("#button5").on("click", function() {
    var buttons = document.getElementsByClassName("js-button");
    var buttonsToClick = chooseRandomButtons(buttons);
    currentButtons = buttonsToClick;
    flashButtons(buttonsToClick, 0);

  var currentOrder = 0;
  $(".js-button").off("click").on("click", function() {
    var selectedButton = $(this)[0];
    var button = currentButtons[0];
    if (selectedButton === button) {
        currentButtons.splice(button,1);
        score += 1;
        $("#score").html(`${score}`);
    } else {
        currentButtons = buttonsToClick;
        alert("Wrong. Click 'Start' to try again");
        score = 0;
        $("#score").html(`${score}`);
    }
  });
})

function chooseRandomButtons(buttons) {
    var buttonsToClick = [];
    var maxRandomNumber = buttons.length - 1;
    for (var i = 0; i < 4; i++) {
        buttonsToClick.push(buttons[randomIntFromInterval(0, maxRandomNumber)]);
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