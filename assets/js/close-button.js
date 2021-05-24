// This will close the "how to play" div
$("#btn-close").on("click", function() {
    if ($("#rule-container").style.display === "none") {
    $("#rule-container").style.display = "block";
  } else {
    $("#rule-container").style.display = "none";
  }
});