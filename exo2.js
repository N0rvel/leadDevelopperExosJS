const scanf = require('scanf');

console.log('Saisir un nombre');
const nombre = scanf('%d');
let resultat = 0;

for (let i = nombre ; i>0 ; i--){
    resultat+=i;
}

console.log(resultat);