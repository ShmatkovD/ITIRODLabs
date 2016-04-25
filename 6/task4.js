
let month = parseInt(prompt("Write month"));
let day = parseInt(prompt("Write day"));

let daysCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

if (month < 1 || month > daysCounts.length || daysCounts[month - 1] < day || day < 1){
    alert("You printed wrong data!");
}
else {
    daysFromBegin = 0;
    for (let i = 0; i < month - 1; i += 1){
        daysFromBegin += daysCounts[i];
    }
    daysFromBegin += day;
    dayNumber = ((daysFromBegin + 2) % 7);
    alert(dayNames[dayNumber]);
}

function* gen(a) {
    for (let i = 0; i < a; i++){
        yield i;
    }
}

for (let el of gen(10)){
    alert(el);
}

