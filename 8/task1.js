function* range(start, finish, step){
    if (step === undefined){
        step = 1;
    }
    let k = 1;
    if (step < 0){
        k = -1;
    }
    if ((finish - start) * step <= 0) {
        throw "Incorrect values.";
    }
    for (let current = start; current*k < finish*k; current += step){
        yield current;
    }
};

let args = prompt("write 2 numbers");
args = args.split(" ");
alert(
    range(
        parseInt(args[0]),
        parseInt(args[1])
    )
);

args = prompt("write 3 numbers");
args = args.split(" ");
alert(
    range(
        parseInt(args[0]),
        parseInt(args[1]),
        parseInt(args[2])
    )
);