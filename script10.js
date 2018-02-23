var saluto = "Buongiorno";

function saluta(persona) {

    var nomeCognome = persona.nome + " " + persona.cognome;

    function visualizzaSaluto() {
        console.log(saluto + " " + nomeCognome);

    }

    visualizzaSaluto();

}


saluta({
    nome: "Mario",
    cognome: "Rossi"
});

var somma = (x, y) => x + y;

var totale = somma(2,3);