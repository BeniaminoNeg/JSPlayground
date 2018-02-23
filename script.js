
function somma(x=0, y=0 ) {

    var z = 0;
    var i;

    for (i in arguments) {
        console.log(arguments[i]);
        z = z + arguments[i];
    }

    return z;
}

var s = somma(1);

console.log(s);
