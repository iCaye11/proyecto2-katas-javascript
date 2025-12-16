//Ejercicio 13

//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.


function nameFinder() {
    const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
    ];

    let value = 'Bruce';

    for (let i = 0; i < names.length; i++){
        if (names[i] == value){
            return {found: true, position: i}
        };
    }
    return {found: false};

}

console.log(nameFinder());