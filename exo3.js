const scanf = require('scanf');

console.log('Saisir 5 nombres');

let tableau = [];
for (let i = 0; i < 5 ; i++){
    tableau.push(scanf("%d"));
}

let previousItem = tableau.indexOf(0);
let indiceGrandNombre = 0;
let moy = 0;
tableau.forEach(function(item, index){
    if (previousItem<item && tableau[indiceGrandNombre] < item){
        indiceGrandNombre = index;
        console.log("ici " + item)
    }
    previousItem = item;
    moy += item;
});
moy /= tableau.length;

// Affichage des résultats
console.log(tableau);
console.log("Indice du plus grand nombre: %s", indiceGrandNombre);
console.log("Moyenne: %s", moy);
