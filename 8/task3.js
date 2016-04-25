let gen = function(x, y){
    let rowsList = [];
    for (let i = 0; i < x; i += 1){
        //rowList[i] = Array();
        rowsList[i] = [];
        for (let j = 0; j < y; j += 1){
            let rnd = (Math.random() * 100);
            rowsList[i][j] = rnd - rnd % 1;
        }
    }
    return rowsList;
};

let summ = function(x, y){
    if (x.length != y.length){
        throw "Ooops, wrong data.";
    }

    let result = [];
    for (let i = 0; i < x.length; i += 1){
        result[i] = [];

        if (x[i].length != y[i].length){
            throw "Ooops, wrong data."
        }

        for (let j = 0; j < x[i].length; j += 1){
            result[i][j] = (
                x[i][j] + y[i][j]
            );
        }
    }

    return result;
};

let pair = prompt("write x and y");
pair = pair.split(" ");
let x = parseInt(pair[0]);
let y = parseInt(pair[1]);

let a = gen(x, y)
alert(a.length);
alert(a);
let b = gen(x, y);
alert(b);
let c = summ(a, b);
alert(c);