class Persona {

    constructor (nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = "";
        this.indirizzo = "";
    }

    mostraNomeCompleto(){
        return this.nome + " " + this.cognome;
    }

    get email() {
        return this._email;
    }

    set email(value) {

        var emailRegExp = /\w+@\w+\.\w{2,4}/i;
        if (emailRegExp.test(value)) {

            this._email = value;
        } else {

            console.log("Email non valida!");
        }
    }
}

class Programmatore extends  Persona {
    constructor(nome, cognome){

        super(nome, cognome);
        this.linguaggiConosciuti = [];
    }
}