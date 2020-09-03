class Escuderia {
    constructor(name, budget, country) {
        this._name = name;
        this._budget = budget;
        this._country = country;
        this._cars = [];
        this._employees = [];
    }
    //GETERS
    get name() {
        return this._name;
    }
    get budget() {
        return this._budget;
    }
    get country() {
        return this._country;
    }

    viewEscuderiaCars() {
        let mensaje ="";
        mensaje ="La escuderia " + this._name + " tiene los siguientes coches:\n";
        for (this._cars of this._cars) {
            mensaje += "\nPotencia: " + this._cars.power + ". Velocitat: " + this._cars.speed + " Color: " + this._cars.color;
        }
        return mensaje;
    }
    viewEscuderiaMechanics() {
        let mensaje ="";
        mensaje ="La escuderia " + this._name + " tiene los siguientes Mecánicos:\n";
        for (let employe of this._employees) {
            if (employe instanceof Mechanic){
            mensaje += employe.printMechanic()+"\n\n";
            }
        }
        return mensaje;
    }
    viewEscuderiaPilots() {
        let mensaje ="";
        mensaje ="La escuderia " + this._name + " tiene los siguientes Pilotos:\n";
        for (let employe of this._employees) {
            if (employe instanceof Pilot){
            mensaje += employe.printPilot()+"\n\n";
            }    
        }
        return mensaje;
    }
    viewEscuderiaEmployees() {
        let mensaje ="";
        mensaje ="La escuderia " + this._name + " tiene los siguientes Empleados:\n";
        for (let employe of this._employees) {
            if (employe instanceof Mechanic){
            mensaje += employe.printMechanic()+"\n\n";
            }else if (employe instanceof Pilot){
            mensaje += employe.printPilot()+"\n\n";
            }else{
            mensaje += employe.printEmployee()+"\n\n";
            }    
        }
        return mensaje;
        
    }


    createCarByCode(power, speed, color, price) {
        this._cars.push(new Car(power, speed, color, price))
    }
    //CRUD Coches
    createCar() {
        let color = prompt("Introduce el color")
        let car = this._cars.find(car => car.color == color);
        if (car != undefined) {
            alert("Ya existe un coche de este color");
        } else {
            let power = -1;
            while ((power < 0) || (power > (2000)) || (isNaN(power))) {
                power = parseInt(prompt("Introduce la potencia"));
            }
            let speed = -1;
            while ((speed < 0) || (speed > (2000)) || (isNaN(speed))) {
                speed = parseInt(prompt("Introduce la velocidad"));
            }
            let price = -1;
            while ((price < 0) || (price > (20000000)) || (isNaN(price))) {
                price = parseInt(prompt("Introduce el precio"));
            }
        this._cars.push(new Car(power, speed, color, price))
        }    
    }
    deleteCar() {
        let color = prompt("Introduce el color")
        let car = this._cars.find(car => car.color == color);
        if (car != undefined) {
            this._cars.splice(this._cars.indexOf(car))
            alert("Coche eliminado");
        } else {
            alert("No existe coche con este color");
        }
    }
    readCar() {
        let color = prompt("Introduce el color")
        let car = this._cars.find(car => car.color == color);
        if (car != undefined) {
            let mensaje = car.printCar()
            alert(mensaje);
        } else {
            alert("No existe coche con este color");
        }
    }   
        
        
    updateCar() {
            let color = prompt("Introduce el color")
            let car = this._cars.find(car => car.color == color);
            if (car != undefined) {
                let power = -1;
                while ((power < 0) || (power > (2000)) || (isNaN(power))) {
                    power = parseInt(prompt("Introduce la potencia"));
                car.power=power;
                }
                let speed = -1;
                while ((speed < 0) || (speed > (2000)) || (isNaN(speed))) {
                    speed = parseInt(prompt("Introduce la velocidad"));
                car.speed=speed;
                }
                let price = -1;
                while ((price < 0) || (price > (20000000)) || (isNaN(price))) {
                    price = parseInt(prompt("Introduce el precio"));
                car.price=price;
                }
            } else {
                alert("No existe un coche de este color")
            }    
        }




    // CRUD Mechanico
    createMechanic() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let mechanic = this._employees.find(mechanic => mechanic.name === name && mechanic.surname === surname && (mechanic instanceof Mechanic));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (mechanic != undefined) {
            alert("el mecánico ya existe");
        } else {
            let years = -1;
            while ((years < 0) || (years > (100)) || (isNaN(years))) {
                years = parseInt(prompt("Introduce la antiguedad"));
            }
            let studies = "";
            while ((studies != "YES") && (studies != "NO")) {
                studies = prompt("Tiene estudios superiores.\nYes / No");
                studies = studies.toUpperCase();
                if (studies == "Y") {
                    studies = "YES";
                } else if (studies == "N") {
                    studies = "NO";
                }
            }

            this._employees.push(new Mechanic(name, surname, years, studies));
            console.log(this._employees);
            console.log(Mechanic);
        }
    }
    deleteMechanic() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let mechanic = this._employees.find(mechanic => mechanic.name === name && mechanic.surname === surname && (mechanic instanceof Mechanic));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (mechanic != undefined) {
            this._employees.splice(this._employees.indexOf(mechanic))
            alert("Mecánico eliminado");
        } else {
            alert("El mecánico no existe");
        }
    }
    readMechanic() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let mechanic = this._employees.find(mechanic => mechanic.name === name && mechanic.surname === surname && (mechanic instanceof Mechanic));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (mechanic != undefined) {
            let mensaje = mechanic.printMechanic()
            alert(mensaje);
        } else {
            alert("El Mecanico no existe");
        }
    }
    updateMechanic() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let mechanic = this._employees.find(mechanic => mechanic.name === name && mechanic.surname === surname && (mechanic instanceof Mechanic));
        if (mechanic != undefined) {
            let name = prompt("Introduce el nuevo nombre");
            mechanic.name = name;
            let surname = prompt("Introduce el nuevo apellido");
            mechanic.surname = surname;
            let years = -1;
            while ((years < 0) || (years > (100)) || (isNaN(years))) {
                years = parseInt(prompt("Introduce la nueva antiguedad"));
                mechanic.years = years;
            }
            let studies = "";
            while ((studies != "YES") && (studies != "NO")) {
                studies = prompt("Tiene estudios superiores.\nYes / No");
                studies = studies.toUpperCase();
                if (studies == "Y") {
                    studies = "YES";
                } else if (studies == "N") {
                    studies = "NO";
                }
            }
            mechanic.studies = studies;
        } else {
            alert("El mecánico no existe");
        }
    }









    // CRUD Piloto


    createPilot() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let pilot = this._employees.find(pilot => pilot.name === name && pilot.surname === surname && (pilot instanceof Pilot));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (pilot != undefined) {
            alert("el piloto ya existe");
        } else {
            let years = -1;
            while ((years < 0) || (years > (100)) || (isNaN(years))) {
                years = parseInt(prompt("Introduce la antiguedad"));
            }
            let height = -1;
            while ((height < 0) || (height > (230)) || (isNaN(height))) {
                height = prompt("Introduce la altura en cm.");
            }
            let weight = -1;
            while ((weight < 0) || (weight > (150)) || (isNaN(weight))) {
                weight = prompt("Introduce el peso en kg.");
            }
            this._employees.push(new Pilot(name, surname, years, height, weight));
            console.log(this._employees);
            console.log(Pilot);
        }
    }
    deletePilot() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let pilot = this._employees.find(pilot => pilot.name === name && pilot.surname === surname && (pilot instanceof Pilot));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (pilot != undefined) {
            this._employees.splice(this._employees.indexOf(pilot))
            alert("Piloto eliminado");
        } else {
            alert("El piloto no existe");
        }
    }
    readPilot() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let pilot = this._employees.find(pilot => pilot.name === name && pilot.surname === surname && (pilot instanceof Pilot));
        //Vas per aqui revisa la sintaxi de la superior Arrayonbusques.find(Clasedobejctequebusques => Clasedobejctequebusques.atribut === variable que compares).
        if (pilot != undefined) {
            let mensaje = pilot.printPilot()
            alert(mensaje);
        } else {
            alert("El piloto no existe");
        }
    }
    updatePilot() {
        let name = prompt("Introduce el nombre");
        let surname = prompt("Introduce el apellido");
        let pilot = this._employees.find(pilot => pilot.name === name && pilot.surname === surname && (pilot instanceof Pilot));
        if (pilot != undefined) {
            let name = prompt("Introduce el nuevo nombre");
            pilot.name = name;
            let surname = prompt("Introduce el nuevo apellido");
            pilot.surname = surname;
            let years = -1;
            while ((years < 0) || (years > (100)) || (isNaN(years))) {
                years = parseInt(prompt("Introduce la nueva antiguedad"));
                pilot.years = years;
            }
            let height = -1;
            while ((height < 0) || (height > (230)) || (isNaN(height))) {
                height = prompt("Introduce la nueva altura en cm.");
                pilot.height = height;
            }
            let weight = -1;
            while ((weight < 0) || (weight > (150)) || (isNaN(weight))) {
                weight = prompt("Introduce el nuevo peso en kg.");
                pilot.weight = weight;
            }
        } else {
            alert("El piloto no existe");
        }
    }
}