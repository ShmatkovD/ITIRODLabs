var clicker = function () {
    let el = document.createElement('input');
    el.type = 'text';
    document.getElementById('container').appendChild(el);

};

document.getElementById('adder').addEventListener('click',  clicker);
document.getElementById('adder');