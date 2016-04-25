
while (true){
    let a = prompt("Write number 1:");
    let b = prompt("Write number 2:");
    let are_numbers = true;
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a)) {
        alert("1 is not a number");
        are_numbers = false;
    }
    if (isNaN(b))   {
        alert("2 is not a number");
        are_numbers = false;
    }
    if (are_numbers) {
        if (a === b) {
            alert("numbers are equal");
        }
        else {
            alert("numbers are not equal")
        }
    }
}