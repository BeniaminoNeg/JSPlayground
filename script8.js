var incrementatore = function (incremento) {

    var f =  function (valore) {
        return incremento + valore;
    };

    return f;
};

var incrementadicinque = incrementatore(5);

console.log(incrementadicinque(4));