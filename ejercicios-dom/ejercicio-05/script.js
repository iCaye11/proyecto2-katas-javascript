//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.


const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const container = document.createElement('div');
container.classList.add('album-container');

const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Albumsss';
titulo.classList.add('album-title');
container.appendChild(titulo);

const ul = document.createElement('ul');
ul.id = 'album-list';

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    li.classList.add('album-item'); 
    ul.appendChild(li);
});

container.appendChild(ul);
document.body.appendChild(container);

