class Node {
    constructor(string, value, ...rest){
        this.string = string;
        this.value = value;
        this.child1 = rest[0];
        this.child2 = rest[1]
    }
}

let string = prompt('enter your string');

let dict = {};

for (let char of string) {
    if (dict.hasAttribute(char)) {
        dict[char] += 1;
    }
    else {
        dict[char] = 1;
    }
}

ar = new Set();

for (let el of dict){
    ar.add(new Node(el, dict[el]))
}

function getMin(ar){
    min = null;
    minVal = 100000000;
    for (let el of ar) {

    }
}


