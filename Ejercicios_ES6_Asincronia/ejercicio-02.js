//Ejercicio 2

//2.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const copia = [...pointsList];

console.log("Apartado 2.1:");
console.log(pointsList);
console.log(copia);
console.log();

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToys = {...toy};
console.log("Apartado 2.2:");
console.log(toy);
console.log(copiaToys);
console.log();
//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

//const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const copiaList1y2 = [...pointsList, ...pointsList2];
console.log("Apartado 2.3:");
console.log(pointsList);
console.log(pointsList2);
console.log(copiaList1y2);
console.log();

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

//const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const copiaToy1Toy2 = {...toy, ...toyUpdate};
console.log("Apartado 2.4:");
console.log(toy);
console.log(toyUpdate);
console.log(copiaToy1Toy2);


//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copiaColors = [...colors.slice(0, 2), ...colors.slice(3)];


console.log();
console.log("Apartado 2.5:");
console.log(colors);
console.log(copiaColors);
