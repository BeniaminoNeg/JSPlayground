var numeri = [18, 13, 24];

numeri.forEach(valore => console.log(valore));

///////////////////////////////////////////////////////////////

//COSTRUTTORE//

function Persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = "";
    this.email = "";

    this.mostraNomeCompleto = function () {

    };
    this.calcolaCodiceFiscale = function () {

    };
}

var marioRossi = new Persona("Mario", "Rossi"); // Il prototipo è il prototype del costruttore
var giuseppeVerdi = new Persona("Giuseppe", "Verdi");

//marioRossi.telefono = "65443453";

//PROTOTYPE

Persona.prototype.telefono = "1234567890"; // così tutte le persone lo avranno

var essere = Object.create(Object.prototype);


var silvioBianch = Object.create(
    persona.prototype,
    {
        nome: {value : "Mario"},
        cognome: {value: "ROssi"}
    }
);


function Programmatore(nome, cognome) {
    persona.call(this, nome, cognome);
    this.linguaggiConosciuti = [];

}


Programmatore.prototype = Object.create(persona.prototype);




