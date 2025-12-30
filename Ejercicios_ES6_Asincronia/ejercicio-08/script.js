const listaPersonajes = document.getElementById('character-list');
const fotoPersonaje = document.querySelector('.character-image');


async function personajes() {
    try{
        const cargaPersonajes = await fetch ('https://thronesapi.com/api/v2/Characters');
        const characters = await cargaPersonajes.json();
        characters.forEach(character => {
            const opciones = document.createElement('option');
            opciones.value = character.imageUrl;
            opciones.textContent = character.fullName;
            listaPersonajes.appendChild(opciones);
        });

    } catch (error){
        console.error("Error al cargar.", error);
    }
}

listaPersonajes.addEventListener('change', () => {
    const imagen = listaPersonajes.value;
    fotoPersonaje.src = imagen;
});

personajes();