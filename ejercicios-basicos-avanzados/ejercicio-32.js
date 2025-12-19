//Ejercicio 32

//Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

//Utiliza este array para probar tu función.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  let masAntigua = xMen [0];

    for(const nombre of xMen){
        if (nombre.year < masAntigua.year){
            masAntigua = nombre;
        }
    }
    return masAntigua;
}

console.log(findOldestXMen(xMen));

//Hay más de un personaje de ese año. Imprimiremos todos ellos reutilizando la función anterior


function losMasAntiguos(xMen){
    
    const masAntigua = findOldestXMen(xMen);
    const añoMasViejo = masAntigua.year; 
    const listaConViejos = [];

    for (const nombre of xMen){
        if(nombre.year == añoMasViejo){
            listaConViejos.push(nombre);
        }
    }
    return listaConViejos;
}

console.log("");

console.log(losMasAntiguos(xMen));