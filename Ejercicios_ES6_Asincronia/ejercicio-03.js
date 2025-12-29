//Ejercicio 3

//3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);
console.log(names);


//3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


/*const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
]; */

const nombres = users.map(usuario => {
  if (usuario.name.startsWith('A')) {
    return 'Anacleto';
  } else {
    return usuario.name;
  }
});
//Con operador ternario ? hacemos el if en una sola línea
/*const names = users.map(usuario => {
  return usuario.name.startsWith('A') ? 'Anacleto' : usuario.name; */

  console.log();
  console.log("Apartado 3.2: ");
  console.log("Original: ", names);
  console.log("Con la condición: ", nombres);



//3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad  .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const cityNames = cities.map (city => city.isVisited ? `${city.name} (Visitado)` : city.name + 
	(" (No visitado, aún)"));

console.log();
console.log("Apartado 3.3: ");
console.log(cities);
console.log(cityNames);


