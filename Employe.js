class Employe {
    constructor(name, surname, years) {
        this._name = name;
        this._surname = surname;
        this._years = years;
        this._salary = 50000;
    }
    //GETERS
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get years() {
        return this._years;
    }
    get salary() {
        return this._salary;
    }

    printEmployee() {
        let mensaje = "";
        mensaje = "Nombre: " + this._name + ".\n Apellido: " + this._surname + "\n Antiguedad: " + this.years + "\n sueldo: " + this.salary;
        return mensaje;
    }
}
class Pilot extends Employe {
    constructor(name, surname, years, height, weight) {
        super(name, surname, years)
        this._height = height;
        this._weight = weight;
        this._plus = 50000;
        this._salary = this.salaryPilot();
    }
    //GETERS
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get years() {
        return this._years;
    }
    get height() {
        return this._height;
    }
    get weight() {
        return this._weight;
    }
    get salary() {
        return this._salary;
    }
    //SETTERS
    set name(name) {
        this._name = name;
    }
    set surname(surname) {
        this._surname = surname;
    }
    set years(years) {
        this._years = years;
    }
    set height(height) {
        this._height = height;
    }
    set weight(weight) {
        this._weight = weight;
    }

    printPilot() {
        let mensaje = "";
        mensaje = " Piloto\n Nombre: " + this._name + ".\n Apellido: " + this._surname + ".\n Antiguedad: " + this.years + ".\n Sueldo: " + this.salary + ".\n Altura: " + this.height;
        return mensaje;
    }
    salaryPilot() {
        this._salary = super.salary +this._plus+(this._years * 10000);
        return this._salary
    }

}
class Mechanic extends Employe {
    constructor(name, surname, years, studies) {
        super(name, surname, years)
        this._studies = studies;
        this._salary = this.salaryMechanic();

    }
    //GETERS
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get years() {
        return this._years;
    }
    get salary() {
        return this._salary;
    }
    get studies() {
        return this._studies;
    }
    //SETTERS
    set name(name) {
        this._name = name;
    }
    set surname(surname) {
        this._surname = surname;
    }
    set years(years) {
        this._years = years;
    }
    set studies(studies) {
        this._studies = studies;
    }
    printMechanic() {
        let mensaje = "";
        mensaje = " Mecánico\n Nombre: " + this._name + ".\n Apellido: " + this._surname + ".\n Antiguedad: " + this.years + ".\n Sueldo: " + this.salary + ".\n Estudios: " + this.studies;
        return mensaje;
    }
    salaryMechanic() {
        this._salary = super.salary + (this.years * 10000);
        return this._salary
    }

}