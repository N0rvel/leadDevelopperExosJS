const Point = require("./Point.js");

class Circle {
    #point = new Point(0,0);
    #radius;

    constructor(point, radius) {
        this.#point = point;
        this.#radius = parseInt(radius);
    }

    getPoint() {
        return this.#point;
    }

    setPoint(point) {
        this.#point = point;
    }

    getRadius() {
        return this.#radius;
    }

    setRadius(value) {
        this.#radius = value;
    }

    toString(){
        return "Cercle: {Point: " + this.getPoint().toString() + ", radius: " + this.getRadius() +"}";
    }

    area(){
        return Math.PI * (this.getRadius() * this.getRadius());
    }

    containsPoint(point){
        return Math.pow((point.getX() - this.getPoint().getX()), 2) +
            Math.pow((point.getY() - this.getPoint().getY()), 2) <= this.getRadius() * this.getRadius();
    }
}
// Origine du cercle
let pCercle = new Point(0,0);

// Point qui sert à tester s'il est dans le cercle
let p = new Point(1,1);

let cercle = new Circle(pCercle, 2);

console.log(cercle.toString());
console.log("Aire du cercle: %s", cercle.area());
console.log("Inside: %s", cercle.containsPoint(p));
