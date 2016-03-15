var max = function(a, b){
    if (a > b){
        return a;
    }
    return b;
};

var min = function(a, b){
    if (a < b){
        return a;
    }
    return b;
};

var dotsCheck = function(x, y) {
    var n = 4;
    var s = 0;
    var isRectangle = true;
    for (var i = 0; i < n; i += 1) {
        var a = i % n;
        var b = (i + 1) % n;
        s += (x[a] - x[b]) * (y[a] + y[b]) / 2;
        if (x[a] != x[b] && y[a] != y[b]){
            isRectangle = false;
        }
    }
    if (isRectangle){
        return true;
    }
    else{
        return false;
    }
    //if ( s < 0 ){
    //    alert("Clockwise.")
    //}
    //else{
    //    alert("Counter-clockwise.")
    //}
};

var isInnerDot = function(xx, yy, x, y) {
    var minX = xx[0];
    var maxX = xx[0];
    var minY = yy[0];
    var maxY = yy[0];
    for (var i = 0; i < 4; i += 1){
        minX = min(minX, xx[i]);
        maxX = max(maxX, xx[i]);
        minY = min(minY, yy[i]);
        maxY = max(maxY, yy[i]);
    }
    return (x >= minX && x <= maxX && y >= minY && y <= maxY);
};


var x = [];
var y = [];

for (var i = 0; i < 4; i += 1){
    var pair = prompt("Print x and y in format 'x,y' of " + (i + 1) + " number.");
    pair = pair.split(",");
    x.push(parseInt(pair[0]));
    y.push(parseInt(pair[1]));
}

//alert(x);
//alert(y);

var result = dotsCheck(x, y);

if (result){
    var pair = prompt("It is a rectangle. What dot you want to check? (format 'x,y')");
    pair = pair.split(",");
    result = isInnerDot(x, y, parseInt(pair[0]), parseInt(pair[0]));
    if (result){
        alert("It is inner dot.");
    }
    else{
        alert("Is is outer dot.");
    }
}
else{
    alert("It is not a rectangle.");
}
