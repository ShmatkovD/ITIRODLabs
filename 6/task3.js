
var number = parseInt(prompt("Write number of the fibonachi number you want to know"));

try {
    var a = 0;
    var b = 1;
    if (number >= 0 && !isNaN(number)){
        for (var i = 1; i < number; i += 1){
            a += b;
            var temp = a;
            a = b;
            b = temp;
        }
        alert(b);
    }
    else{
        throw "Ooops, something wrong!";
    }
} catch (ex) {
    alert("Exception! " + ex);
}

