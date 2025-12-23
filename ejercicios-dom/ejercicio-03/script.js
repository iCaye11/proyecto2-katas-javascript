//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. 

const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const uList = document.createElement('ul');

for (const pais of paises){
    const oList = document.createElement('li');
    oList.textContent = pais;
    uList.appendChild(oList);
};
document.body.appendChild(uList);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector('.fn-remove-me').remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const unorderL = document.createElement('ul');
const divCoches = document.querySelector('[data-function="printHere"]');

for(const car of cars){
    const orderL = document.createElement('li');
    orderL.textContent = car;
    unorderL.appendChild(orderL);
};
divCoches.appendChild(unorderL);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const fotos = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const foto of fotos){
    const divC = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    h4.textContent = foto.title;
    img.src = foto.imgUrl;

    divC.appendChild(h4);
    divC.appendChild(img);
    document.body.appendChild(divC);
};

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement('button');
button.textContent = 'Eliminar último';

button.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    const ultimoDiv = divs[divs.length -1];

    if (ultimoDiv){
        ultimoDiv.remove();
    }
})

document.body.appendChild(button);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const todosLosDivs = document.querySelectorAll('div');

todosLosDivs.forEach(div => {
    const deleteBoton  = document.createElement('button');
    deleteBoton.textContent = 'Elimina esta foto';

    deleteBoton.addEventListener('click', () => {
        div.remove();
    });

    div.appendChild(deleteBoton);
});
