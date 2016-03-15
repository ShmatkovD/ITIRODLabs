
var height = parseInt(prompt("How many stages?"));
var porchesCount = parseInt(prompt("How many porches?"));
var flatsCount = parseInt(prompt("How many flats per stage?"));

var flatNumber = parseInt(prompt("What is your flat number?"));

try {
    flatsPerPorch = height * flatsCount;
    var porchNumber = Math.floor(flatNumber/flatsPerPorch);
    if (flatNumber % flatsPerPorch != 0){
        porchNumber += 1;
    }
    if (porchNumber >= 1 && porchNumber <= porchesCount){
        alert("You live in " + porchNumber + " porch.");
    }
    else{
        throw new Error("Wrong value!");
    }
} catch (ex){
    alert("Exception!" + ex);
}
