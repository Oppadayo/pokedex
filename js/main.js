const main = document.querySelector('.cards')


const fetchPokemons = async () =>{
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`
  const res = await fetch(pokemonUrl)
  const pokemon = await res.json()  
  
  getPokemons(pokemon.results)
}

const getPokemons = async poke =>{  
  
  for(let prop in poke){
    const pokemonUrl = poke[prop].url
    
    const res = await fetch(pokemonUrl)
    const pokemon = await res.json()
    
    createPokemonCard(pokemon)
    
  }   
  
}

fetchPokemons()

function createPokemonCard(pokemon){
  const pokemonEl = document.createElement('div')  

  const types = pokemon.types.map(el => el.type.name)
  
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  pokemonEl.classList.add('card', types[0])
  

  const pokemonInnerHTML = `  
  <div class="number">#${pokemon.id.toString().padStart(3, '0')}</div>      
      <h2 class="name">${name}</h2>
      <div class="info">
      <div class="types">
       <span class="type one">${types[0]}</span>         
      <span class="${types[1] ? 'type' : 'hide' }">${types[1]}</span>
      </div>        
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" class="poke-img" />
      </div> 
  ` 

  pokemonEl.innerHTML = pokemonInnerHTML  

  main.appendChild(pokemonEl)
  
}

