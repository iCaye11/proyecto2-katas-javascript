//Ejercicio 12

//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


function removeDuplicates(list) {
  const nuevoArray = [];
  
  for (let i = 0; i < list.length; i++){
    if(!nuevoArray.includes(list[i])){
        nuevoArray.push(list[i]);
    }
  }
  return nuevoArray;

}

console.log(removeDuplicates(duplicates));