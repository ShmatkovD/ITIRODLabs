var checkNumber = function(x){
    return Number(x) === x;
};

var oneParam = function(func){
    return function(x){
        var isNumber = checkNumber(x);
        var result = func(x);
        return [isNumber, result];
    };
};

var manyParams = function(funct){
    return function(){
        var isNumbers = true;
        for (var i = 0; i < arguments.length; i += 1){
            isNumbers &= checkNumber(arguments[i]);
        }
        var result = funct.apply({
            foo: 'bar'
        }, arguments);
        console.log(this);
        if (isNumbers){
            isNumbers = true;
        }
        else{
            isNumbers = false;
        }
        setTimeout(func.bind(this), 1000);
        return [isNumbers, result];
    };
};

var test1 = function(x){
    return x;
};

var test2 = function(x, y){
    console.log(this.isNumbers);
    return [x, y];
};

test1 = oneParam(test1);
test2 = manyParams(test2);

alert(test1(1));
alert(test1('a'));
alert(test2(1, 2));
alert(test2(2, 'a'));
alert(test2('a', 'b'));

