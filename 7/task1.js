let max = (a, b) => Math.max(a, b);

let min = (a, b) => Math.min(a, b);

let dotsCheck = function(x, y) {
    let n = 4;
    let s = 0;
    let isRectangle = true;
    for (let i = 0; i < n; i += 1) {
        let a = i % n;
        let b = (i + 1) % n;
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

let isInnerDot = function(xx, yy, x, y) {
    let minX = xx[0];
    let maxX = xx[0];
    let minY = yy[0];
    let maxY = yy[0];
    for (let i = 0; i < 4; i += 1){
        minX = min(minX, xx[i]);
        maxX = max(maxX, xx[i]);
        minY = min(minY, yy[i]);
        maxY = max(maxY, yy[i]);
    }
    return (x >= minX && x <= maxX && y >= minY && y <= maxY);
};


let x = [];
let y = [];

for (var i = 0; i < 4; i += 1){
    let pair = prompt(`Print x and y in format 'x,y' of ${(i + 1)} number.`);
    pair = pair.split(",");
    x.push(parseInt(pair[0]));
    y.push(parseInt(pair[1]));
}

//alert(x);
//alert(y);

let result = dotsCheck(x, y);

if (result){
    let pair = prompt("It is a rectangle. What dot you want to check? (format 'x,y')");
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
