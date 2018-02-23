var personaMario = {

    nome : "Mario",
    cognome : "Rossi",

    nomeCognome : function () {
        var r = this.nome + " " + this.cognome;
        return r;
    }
};

///////////////////

function saluta(persona) {

    console.log("Buongiorno " + persona.nomeCognome());

};

saluta(personaMario);


//////////////////

var persona2 = {
    nome: "Guido",
    cognome : "La Vespa",
    saluta : function () {
        alert("Buongiorno " + this.nome + " " + this.cognome);
    }
};

document.getElementById("pulsante").addEventListener("click", persona2.saluta);


