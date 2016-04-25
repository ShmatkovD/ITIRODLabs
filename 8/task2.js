let sort = function(ar, cmp){
    if (cmp === undefined){
        cmp = function(x, y){
            if (x < y){
                return true;
            }
            return false;
        };
    }

    n = ar.length;
    for (let i = 0; i < n; i += 1){
        for (let j = 0; j < n - 1; j += 1){

            if (!cmp(ar[j], ar[j + 1])){
                let temp = ar[j];
                ar[j] = ar[j + 1];
                ar[j + 1] = temp;
            }

        }
    }

    return ar;
};

let cmp = function(x, y){
    if (x < y){
        return false;
    }
    return true;
};

let values = prompt("write values");
values = values.split(" ");
let ar = [];
for (let i = 0; i < values.length; i += 1){
    ar.push(
        parseInt(values[i])
    );
}

alert(
    sort(ar)
);