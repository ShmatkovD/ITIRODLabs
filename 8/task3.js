var gen = function(x, y){
    var rowsList = [];
    for (var i = 0; i < x; i += 1){
        //rowList[i] = Array();
        rowsList[i] = [];
        for (var j = 0; j < y; j += 1){
            var rnd = (Math.random() * 100);
            rowsList[i][j] = rnd - rnd % 1;
        }
    }
    return rowsList;
};

var summ = function(x, y){
    if (x.length != y.length){
        throw "Ooops, wrong data.";
    }

    var result = [];
    for (var i = 0; i < x.length; i += 1){
        result[i] = [];

        if (x[i].length != y[i].length){
            throw "Ooops, wrong data."
        }

        for (var j = 0; j < x[i].length; j += 1){
            result[i][j] = (
                x[i][j] + y[i][j]
            );
        }
    }

    return result;
};

var pair = prompt("write x and y");
pair = pair.split(" ");
var x = parseInt(pair[0]);
var y = parseInt(pair[1]);

var a = gen(x, y)
alert(a.length);
alert(a);
var b = gen(x, y);
alert(b);
var c = summ(a, b);
alert(c);