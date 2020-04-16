//Dark mode logic
//Using localStorage variables
var darkMode = localStorage.getItem("darkmode");

if(darkMode) {
    //Adds dark mode specific css
    //to create a darker viewport
    $('#darkModeSwitch').prop("checked", true);
    $("body").toggleClass("body-dark");
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })//causes text change on checkbox switch
    $(".btn-black").toggleClass("btn-white");
    $("a").toggleClass("anchor-styling-dark");
}

//localStorage function set and remove for dark mode
$("#darkModeSwitch").change(function() {
    darkMode = !darkMode;
    if (darkMode) {
        localStorage.setItem("darkmode", "1");
    } else {
        localStorage.removeItem("darkmode");
    }
    //removes the classes when the switch is rechecked
    $("body").toggleClass("body-dark", darkMode);
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })//changes text back on switch check
    $(".btn-black").toggleClass("btn-white", darkMode);
    $("a").toggleClass("anchor-styling-dark", darkMode);
});