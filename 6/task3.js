
let number = parseInt(prompt("Write number of the fibonachi number you want to know"));

try {
    let a = 0;
    let b = 1;
    if (number >= 0 && !isNaN(number)){
        for (let i = 1; i < number; i += 1){
            a += b;
            let temp = a;
            a = b;
            b = temp;
        }
        alert(b);
    }
    else{
        throw "Ooops, something wrong!";
    }
} catch (ex) {
    alert(`Exception! ${ex}`);
}

(a, b) => {
    return a, b
};