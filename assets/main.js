var darkMode = localStorage.getItem("darkmode");

if(darkMode) {
    $('#customSwitch1').prop("checked", true);
    $("body").toggleClass("body-dark");
    $("nav").toggleClass("navbar-dark bg-dark");
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })
    $("footer").toggleClass("footer-dark");
    $("a").toggleClass("anchor-styling-dark");
}

$("#customSwitch1").change(function() {
    darkMode = !darkMode;
    if (darkMode) {
        localStorage.setItem("darkmode", "1");
    } else {
        localStorage.removeItem("darkmode");
    }

    $("body").toggleClass("body-dark", darkMode);
    $("nav").toggleClass("navbar-dark bg-dark", darkMode);
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })
    $("footer").toggleClass("footer-dark", darkMode);
    $("a").toggleClass("anchor-styling-dark", darkMode);
});