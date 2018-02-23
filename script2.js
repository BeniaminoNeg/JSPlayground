
function eseguioperazione(x, ...y) {

    var z = 1;

    switch (x) {

        case "somma":
            for (i in y) {
                z = z + y[i];
            }
            break;

        case "moltiplica":
            console.log("sto moltiplicando")
            console.log("z=" + z);
            for (i in y) {
                console.log(y[i]);
                z = z * y[i];
            }
            console.log("z=" + z);
            break;

        case "dividi":
            console.log("sto dividendo")
            z= y[0]/y[1];
            break;

        default:
            z = NaN;
            break;
    }
    // noinspection JSAnnotator
    return z;
}

var uno = eseguioperazione("somma", 1,2,3);
var due = eseguioperazione("moltiplica", 5,6,7);
var tre = eseguioperazione("dividi", 9, 3, 6, 7);
var quattro = eseguioperazione("cacca", 6, 8);

console.log(uno);
console.log(due);
console.log(tre);
console.log(quattro);

let 

