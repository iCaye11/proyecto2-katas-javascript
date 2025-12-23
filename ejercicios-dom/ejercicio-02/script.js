//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv = document.createElement('div');

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let otroDiv = document.createElement('div');
let nuevoP = document.createElement('p');

nuevoP.textContent = "Hola, primera prueba";

otroDiv.appendChild(nuevoP);
document.body.appendChild(otroDiv);

//2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let anotherDiv = document.createElement('div');

for(let i = 0; i <= 6; i++){
    let nuevosP = document.createElement('p');
    anotherDiv.appendChild(nuevosP);
}
document.body.appendChild(anotherDiv);
 

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let dinamicP = document.createElement('p');
dinamicP.textContent = 'Soy dinámico!';

document.body.append(dinamicP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector('h2.fn-insert-here').textContent = 'Wubba Lubba dub dub';


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaDesor = document.createElement('ul');

for (const app of apps){
    const listaOr = document.createElement('li');
    listaOr.textContent = app;
    listaDesor.appendChild(listaOr);
};
document.body.appendChild(listaDesor);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me.
document.querySelectorAll('.fn-remove-me').remove();


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
document.querySelectorAll('div')[0].insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase  .fn-insert-here.
const divs = document.querySelectorAll('div.fn-insert-here');
 
for (const div of divs){
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
}
