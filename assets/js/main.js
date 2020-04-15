var darkMode = localStorage.getItem("darkmode");

if(darkMode) {
    $('#customSwitch1').prop("checked", true);
    $("body").toggleClass("body-dark");
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })
    $(".btn-black").toggleClass("btn-white");
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
    $("label").text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
    })
    $(".btn-black").toggleClass("btn-white", darkMode);
    $("a").toggleClass("anchor-styling-dark", darkMode);
});