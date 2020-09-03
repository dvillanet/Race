
let arrayEscuderias = [];

//Setup Escuderias y coches

function crear(){
    //Crear Escuderias
    let escude = new Escuderia("Ferrari", 400000, "Italia");
    arrayEscuderias.push(escude);
    let escude2 = new Escuderia("Renault", 300000, "Francia");
    arrayEscuderias.push(escude2);
    let escude3 = new Escuderia("Mclaren", 800000, "England");
    arrayEscuderias.push(escude3);
    console.log(arrayEscuderias);

// crear Coches
    escude.createCarByCode(500, 350, "Rojo", 500000);
    escude.createCarByCode(600, 370, "Verde", 600000);
    escude.createCarByCode(400, 470, "Gris", 300000);

    escude2.createCarByCode(500, 350, "Lila", 500000);
    escude2.createCarByCode(600, 370, "Naranja", 600000);
    escude2.createCarByCode(400, 470, "Azul", 300000);

    escude3.createCarByCode(500, 350, "Blanco", 500000);
    escude3.createCarByCode(600, 370, "Amarillo", 600000);
    escude3.createCarByCode(400, 470, "Rosa", 300000);

}



//CRUD Piloto seleciona escuderia y llama a funciones en Escuderia

function callCreatePilot() {
    let i = selectEscuderia();
   arrayEscuderias[i].createPilot();
}
function callDeletePilot() {
    let i = selectEscuderia();
   arrayEscuderias[i].deletePilot();
}
function callReadPilot() {
    let i = selectEscuderia();
   arrayEscuderias[i].readPilot();
}
function callUpdatePilot() {
    let i = selectEscuderia();
   arrayEscuderias[i].updatePilot();
}


//CRUD Mecánico seleciona escuderia y llama a funciones en Escuderia

function callCreateMechanic() {
    let i = selectEscuderia();
   arrayEscuderias[i].createMechanic();
}
function callDeleteMechanic() {
    let i = selectEscuderia();
   arrayEscuderias[i].deleteMechanic();
}
function callReadMechanic() {
    let i = selectEscuderia();
   arrayEscuderias[i].readMechanic();
}
function callUpdateMechanic() {
    let i = selectEscuderia();
   arrayEscuderias[i].updateMechanic();
}

//CRUD Coches

function callCreateCar() {
    let i = selectEscuderia();
   arrayEscuderias[i].createCar();
}
function callDeleteCar() {
    let i = selectEscuderia();
   arrayEscuderias[i].deleteCar();
}
function callReadCar() {
    let i = selectEscuderia();
   arrayEscuderias[i].readCar();
}
function callUpdateCar() {
    let i = selectEscuderia();
   arrayEscuderias[i].updateCar();
}






// Listados de las Escuderia
function callViewEscuderiaCars() {
    let i = selectEscuderia();
    let mensaje="";
    mensaje=arrayEscuderias[i].viewEscuderiaCars();
    alert(mensaje)
}
// Listado Mecanicos Escuderia
function callViewEscuderiaMechanics() {
    let i = selectEscuderia();
    let mensaje="";
    mensaje=arrayEscuderias[i].viewEscuderiaMechanics();
    alert(mensaje)
}
// Listado Mecanicos Pilotos
function callViewEscuderiaPilots() {
    let i = selectEscuderia();
    let mensaje="";
    mensaje=arrayEscuderias[i].viewEscuderiaPilots();
    alert(mensaje)
}

// Listado de todos los empleados
function callViewEscuderiaEmployees() {
    let i = selectEscuderia();
    let mensaje="";
    mensaje=arrayEscuderias[i].viewEscuderiaEmployees();
    alert(mensaje)
}




//selector de Escuderia escalable ;)
function selectEscuderia() {
    let escuderia=-1;//para que entre en el while esperando el número de escuderia.
    while ((escuderia<0)||(escuderia>(arrayEscuderias.length-1))||(isNaN(escuderia))){
    escuderia = parseInt(prompt(listEscuderia()));
    }
    return escuderia;
}

function listEscuderia() {
    let mensaje = ""
    for (escuderia of arrayEscuderias) {
        mensaje += arrayEscuderias.indexOf(escuderia) + ". " + escuderia.name + "\n";
    }
    return (mensaje);
}