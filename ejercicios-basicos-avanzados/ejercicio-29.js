//Ejercicio 29

//Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

//Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const pelisPorDecada = {};

for (peli of starWarsMovies){
    let decada = Math.floor(peli.releaseYear / 10) * 10 + "s";
     (pelisPorDecada[decada] = pelisPorDecada[decada] || []).push(peli.title);
     // Esto: || [] hace que primero se cree el objeto, permitiendo un valor vacío y luego añades el valor a ese objeto con el .push


}

console.log(pelisPorDecada);