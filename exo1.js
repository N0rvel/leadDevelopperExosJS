const scanf = require('scanf');

console.log('Saisir une chaine de caractère');
const chaine1 = scanf('%s');

console.log('Saisir une deuxième chaine de caractère');
const chaine2 = scanf('%s');

if (chaine1.length === 2 * chaine2.length){
    console.log("La chaine 1 (longueur: %s) est deux fois plus longue que la chaine 2 (longueur: %s)", chaine1.length, chaine2.length)
} else {
    console.log("La chaine 1 (longueur: %s) n'est pas deux fois plus longue que la chaine 2 (longueur: %s)", chaine1.length, chaine2.length)
}