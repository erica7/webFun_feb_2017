var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

var word;

if (PERIOD == "AM") {
    word = "morning";
} else if (PERIOD == "PM") {
    word = "evening";
}
if (MINUTE <= 30) {
    console.log("It's just after " + HOUR + " in the " + word);
} else {
    console.log("It's almost " + HOUR + " in the " + word);
}