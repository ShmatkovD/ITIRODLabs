

let height = parseInt(prompt("How many stages?"));
let porchesCount = parseInt(prompt("How many porches?"));
let flatsCount = parseInt(prompt("How many flats per stage?"));

let flatNumber = parseInt(prompt("What is your flat number?"));

try {
    flatsPerPorch = height * flatsCount;
    let porchNumber = Math.floor(flatNumber/flatsPerPorch);
    if (flatNumber % flatsPerPorch != 0){
        porchNumber += 1;
    }
    if (porchNumber >= 1 && porchNumber <= porchesCount){
        alert(`You live in ${porchNumber} porch.`);
    }
    else{
        throw new Error("Wrong value!");
    }
} catch (ex){
    alert(`Exception! ${ex}`);
}
