var oggettoVuoto = {};

var persona = {
    nome : "Mario",
    cognome : "Rossi",
    indirizzo: {
        via: "Via Garibaldi",
        numero: 15,
        CAP: "00100",
        citta: "Roma"
    },
    casa: casa
};

var casa = {
    porta : "rossa",
    finestre : ["blu", "beije"]
};

console.log(persona.indirizzo.citta);

console.log(persona.eta);

persona.eta= 32;

console.log(persona.eta);

function visulalizzaNomeCognome() {
    return "Mario ROssi";
}

persona.cognomenome = function () {
    var cn = this.cognome+this.nome;
    return cn;

}

console.log(persona.cognomenome());