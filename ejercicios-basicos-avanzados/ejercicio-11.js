//Ejercicio 11
//Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let suma = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      suma += list[i];
    } else if (typeof list[i] === "string") {
      suma += list[i].length;
    }
  }

  return suma / list.length;
}

console.log(averageWord(mixedElements));

