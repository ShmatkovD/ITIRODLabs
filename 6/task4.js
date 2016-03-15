
var month = parseInt(prompt("Write month"));
var day = parseInt(prompt("Write day"));

var daysCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

if (month < 1 || month > daysCounts.length || daysCounts[month - 1] < day || day < 1){
    alert("You printed wrong data!");
}
else {
    daysFromBegin = 0;
    for (var i = 0; i < month - 1; i += 1){
        daysFromBegin += daysCounts[i];
    }
    daysFromBegin += day;
    dayNumber = ((daysFromBegin + 2) % 7);
    alert(dayNames[dayNumber]);
}
