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
        if (this.getTusksSize() < hyppopotamus2.getTusksSize()){
            return hyppopotamus2;
        } else if (this.getTusksSize() > hyppopotamus2.getTusksSize()){
            return this;
        } else {
            return "Draw";
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
let hyppopotame2 = new Hippopotamus("Hyppo2", 120, 10);
console.log(hyppopotame1.toString());
console.log(hyppopotame2.toString());
console.log("%s gagne le combat !", hyppopotame1.fight(hyppopotame2).getName());
hyppopotame1.cycleDeVie();