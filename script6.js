var somma = function sum (x, y) {

    var r = x+y;
    return r;

}

function molt(x, y) {

    var r = x*y;
    return r;

}

var z = somma(4, 8);

var w = molt;

console.log(z);

console.log(w);

console.log(w(1,1));

console.log(w());

var fu = (function (x,y) {
    return x+y;

}(8,8));

console.log(fu);


console.log(somma.name);