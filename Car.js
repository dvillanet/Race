class Car {
    constructor(power, speed, color, price) {
        this._power = power;
        this._speed = speed;
        this._color = color;
        this._price = price;
    }
    //GETERS
    get power() {
        return this._power;
    }
    get speed() {
        return this._speed;
    }
    get color() {
        return this._color;
    }
    get price() {
        return this._price;
    }
    //SETTERS
    set power(power) {
        this._power = power;
    }
    set speed(speed) {
        this._speed = speed;
    }
    set color(color) {
        this._color = color;
    }
    set price(price) {
        this._price = price;
    }


    printCar() {
        let mensaje = "";
        mensaje = "\nPotencia: " + this._power + ". Velocidad: " + this._speed + " Color: " + this._color+" Precio: " + this._price;
        return mensaje;
    }
}