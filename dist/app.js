"use strict";
function controlTelephoneNumber() {
    let phoneNumber = document.querySelector("#enterNumberToControl");
    let numberPhone = phoneNumber.value.toString();
    /*
    In questa istruzione uso regex (/^\d+$/) a cui passo .test(numberPhone)
    Questa istruzione mi permette di verificare se all'interno di numberPhone ci sono solo numeri
    e mi restituisce un valore booleano */
    if (/^\d+$/.test(numberPhone)) {
        if (numberPhone.length === 10) {
            console.log("Ottimo");
            console.log(numberPhone);
        }
        else if (numberPhone.length > 10) {
            /*slice è un metodo. slice(0, 10) significa che deve partire ad estrarre dalla
            posizione = (dunque la prima), fino ad un totale di 10 elementi, ecco perchè uso
            il 10 nel metodo, anzichè 9... Non è di posizione, ma di quantità
            */
            let newNumber = numberPhone.slice(0, 10);
            console.log(newNumber);
        }
        else {
            console.log("Errore! Numero inserito minore di 10");
        }
    }
    else {
        console.log("Valore inserito non corretto");
    }
    //console.log(numberPhone2);
}
//# sourceMappingURL=app.js.map