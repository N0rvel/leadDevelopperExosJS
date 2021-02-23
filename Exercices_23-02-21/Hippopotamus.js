class Hippopotamus {
    #name;
    #weight;
    #tusksSize;

    constructor(name, weight, tusksSize) {
        this.#name = name;
        this.#weight = weight;
        this.#tusksSize = tusksSize;
    }

    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getWeight() {
        return this.#weight;
    }

    setWeight(value) {
        this.#weight = value;
    }

    getTusksSize() {
        return this.#tusksSize;
    }

    setTusksSize(value) {
        this.#tusksSize = value;
    }

    swim(){
        this.setWeight(this.getWeight()-0.3);
    }

    eat(){
        this.setWeight(this.getWeight()+1);
    }

    toString(){
        return "nom: " + this.getName() +
            ", poid: " + this.getWeight() +
            ", taille défenses: " + this.getTusksSize();
    }

    fight(hyppopotamus2){
        console.log("COMBAT entre %s et %s", this.getName(), hyppopotamus2.getName())
        if (this.getTusksSize() < hyppopotamus2.getTusksSize()){
            console.log("%s gagne le combat !", hyppopotamus2.getName());
        } else if (this.getTusksSize() > hyppopotamus2.getTusksSize()){
            console.log("%s gagne le combat !", this.getName());
        } else {
            console.log("Personne ne gagne le combat !");
        }
    }

    cycleDeVie(){
        for (let jour = 1 ; jour <= 21 ; jour ++){
            for (let heure = 0 ; heure < 15 ; heure++){
                this.eat();
                this.eat();
                this.swim();
                this.swim();
                this.swim();
            }
            console.log("Jour %s: %s pèse %s Kg", jour, this.getName(), this.getWeight());
        }

    }
}

let hyppopotame1 = new Hippopotamus("Hyppo1", 100, 12);
let hyppopotame2 = new Hippopotamus("Hyppo2", 120, 12);
let hyppopotame3 = new Hippopotamus("Hyppo3", 120, 22);
console.log(hyppopotame1.toString());
console.log(hyppopotame2.toString());
console.log(hyppopotame3.toString());
hyppopotame1.fight(hyppopotame2);
hyppopotame2.fight(hyppopotame3);
hyppopotame1.cycleDeVie();
