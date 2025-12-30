//Ejercicio 6

//6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


const suma = exams.reduce((contador, nota) => contador + nota.score, 0);

console.log("Apartado 6.1: ");
console.log("Suma de todas las notas:", suma);
console.log();

//6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const sumaAprobados = exams.reduce((contador, nota) => {
    if(nota.score >= 5){
        return contador + nota.score;
    }
    return contador;
} , 0);

console.log("Apartado 6.2: ");
console.log("Suma de las notas de los alumnos aprobados:", sumaAprobados);
console.log();

//6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce()

const media = exams.reduce((contador, suma) => contador + suma.score, 0);
console.log("Apartado 6.3: ");
console.log("La media de las notas es:", media/exams.length);

