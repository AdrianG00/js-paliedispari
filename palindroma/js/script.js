// Es1.

let userInput = prompt('scrivi una parola o una frase e ti dirò se è palindroma');


if (isPalindrom(userInput)) {
    console.log('Hai scritto una parola palindroma');
}
else {
    console.log('Non hai scritto una parola palindroma');
}


//Funzione per invertire una stringa
function invertString(string) {
    let invertedString = '';
    for (let i = 0; i < string.length; i++) {
        invertedString = string[i] + invertedString;
    }
    return(invertedString);
}

function isPalindrom(string) {
    if (string === invertString(string)) {
        return(true);
    } else {
        return(false);
    }
}

