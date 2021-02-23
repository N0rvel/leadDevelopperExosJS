let tab = ["Mot1", "Mot2", "Mot3", "Mot4"];
let currentWord = tab[0];
let indice = 0;
document.getElementById("button").onclick = function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor= "rgb(" + x + "," + y + "," + z + ")";
    let p = document.getElementById("paragrahe");
    p.innerHTML += currentWord;
}

window.setInterval(function(){
    if (indice > tab.length-1){
    indice = 0;
    }
    currentWord = tab[indice]
    indice++;
}, 5000);

