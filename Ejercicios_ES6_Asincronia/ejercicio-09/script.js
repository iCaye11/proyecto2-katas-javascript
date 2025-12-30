const fotoPokemon = document.querySelector('.random-image');

async function pokemonAleatorio(){
    const aleatorio = Math.floor(Math.random()*151) + 1;
    const link = `https://pokeapi.co/api/v2/pokemon/${aleatorio}`;

    try{
        const respuesta = await fetch (link);
        const data = await respuesta.json();

        const images = [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
            data.sprites.other['official-artwork'].front_default,
            data.sprites.other.dream_world.front_default
        ];

        const pokemonFotos = images.filter(img => img != null);
        const aleatoria = pokemonFotos[Math.floor(Math.random() * pokemonFotos.length)];

        fotoPokemon.src = aleatoria;
        fotoPokemon.title = data.name;  

    } catch (error){
        console.error('Error.', error);
    }
}

pokemonAleatorio();