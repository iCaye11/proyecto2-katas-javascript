//Ejercicio 4

//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const above18 = ages.filter(number => number > 18);
console.log("Apartado 4.1: ");
console.log(above18);
console.log();


//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPares = ages.filter(par => par % 2 === 0);

console.log("Apartado 4.2: ");
console.log(agesPares);
console.log();

//4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamer = streamers.filter(smostStreamed => smostStreamed.gameMorePlayed == 'League of Legends');

console.log("Apartado 4.3: ");
console.log(streamer);
console.log();

//4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]; */

const uStreamer = streamers.filter(u => u.name.includes('u'));
console.log("Apartado 4.4: ");
console.log(uStreamer);
console.log();

//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]; */

const legend35 = streamers.filter(juego => juego.gameMorePlayed.includes('Legends')).map(juego => {
    if (juego.age > 35){
        return {
            ...juego, gameMorePlayed : juego.gameMorePlayed.toUpperCase()
        };
    }
    return juego;
});

console.log("Apartado 4.5: ");
console.log(legend35);

  