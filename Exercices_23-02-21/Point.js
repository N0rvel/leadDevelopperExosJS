class Point {
    #x = 0;
    #y = 0;

    constructor(x, y) {
        this.#x = parseInt(x);
        this.#y = parseInt(y);
    }

    getX() {
        return this.#x;
    }

    setX(value) {
        this.#x = parseInt(value);
    }

    getY() {
        return this.#y;
    }

    setY(value) {
        this.#y = parseInt(value);
    }

    toString(){
        return "x: " + this.getX() + ", y: " + this.getY();
    }
}

let point = new Point(1,2);
console.log(point.toString());
point.setX(5.3);
point.setY(-7);
console.log(point.toString());
