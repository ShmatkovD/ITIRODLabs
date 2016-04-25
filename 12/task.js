var addElement = function (result) {
    let el = document.createElement('textarea');
    el.value = result;
    $("#container").append(el);
};

var clicker = function () {
    $.ajax({
        url: 'http://127.0.0.1:5000/lala',
        success: addElement,
        crossDomain: true
    });
};

$("#adder").bind('click', clicker);