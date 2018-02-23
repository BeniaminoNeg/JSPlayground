//CALLBACK funzioni come parametro di altre funzioni

function calcola(func, arg1, arg2) {
    return func(arg1, arg2);
    //passo la funzione da eseguire come paramretro
}

function sum(x,y) {
    var r = x+y;
    return r;
}

var somma = sum;


console.log(calcola(somma, 13, 25));

console.log(calcola(sum, 13, 25));
//si possono passare come callback sia variabili che puntano a funzioni che funzioni stesse!


var numeri = [11, 3, 24];

function mostravalore(valore, indice) {
    console.log(valore);

}
numeri.forEach(mostravalore);

///////////////////////////////

var mi = new Object({
    nome : "Mario",
    cognome : "Rossi",
    professione : "impiegato"
});

var g = new Object({
    nome: "Giuseppe",
    cognome: "Verdi",
    professione:"operaio"
});

var mc = new Object({
    nome: "Marco",
    cognome: "Neri",
    professione: "insegnante"
});

var persone = new Array(mi,g,mc);
/*
var ordinafunc = new function (a, b) {
    var result=0;
    if (a.cognome < b.cognome) {
        result=-1;
    }
    if (a.cognome > b.cognome) {
        result = 1;
    }

    return result;
};
*/

persone.sort(function (a, b) {
    var result=0;
    if (a.cognome < b.cognome) {
        result=-1;
    }
    if (a.cognome > b.cognome) {
        result = 1;
    }

    return result;
});

//non la potevo definre a parte?

console.log(persone);