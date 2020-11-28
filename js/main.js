const main = document.querySelector('.cards')
const fetchPokemons = async () => {  

  for(let i = 1; i <= 898; i++){
    await getPokemons(i)
  }
}

const getPokemons = async id =>{
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

  const res = await fetch(pokemonUrl)
  const pokemon = await res.json()

  createPokemonCard(pokemon)
}

fetchPokemons()

function createPokemonCard(pokemon){
  const pokemonEl = document.createElement('div')

  const types = pokemon.types.map(el => el.type.name)
  
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  pokemonEl.classList.add('card', types[0])

  const pokemonInnerHTML = `
  
  <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
  <div class="pokemon">
    <div class="info">
      <h2 class="name">${name}</h2>
      <div class="types">
       <span class="type one">${types[0]}</span>         
      <span class="type ${types[1] ? 'two' : 'hide' }">${types[1]}</span>
      </div>   
      </div>
    <div class="pokemon-img">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" class="poke-img" />
    </div>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML

  main.appendChild(pokemonEl)
}
/*

  Promise.all(pokemonPromise)
  .then(pokemons => {    
    
    const listPokemons = pokemons.reduce((accumulator, pokemon) =>{      
    
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)

      accumulator += `
      <div class="card ${types[0]}">
      <span class="number">#00${pokemon.id}</span>
      <div class="pokemon">
        <div class="info">
          <h2 class="name">${pokemon.name}</h2>
          <span class="type one">${types[0]}</span>         
            <span class="type two">${types[1]}</span>
          
          
        </div>
        <div class="pokemon-img">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" class="poke-img" />
        </div>
      </div>
      </div>
      `
      return accumulator
    }, '')

    const card = document.querySelector('.cards')
    
    card.innerHTML = listPokemons
  })
}

fetchPokemons()


/*fetchPokemons(POKEAPI)

function fetchPokemons(url) {
    fetch(url)
    .then(response => response.json())
    .then((allPokemon) => {
      allPokemon.results.forEach((pokemon) =>{
        getPokemons(pokemon)
      })
    })

  
}

function getPokemons(pokemon) {
 let url = pokemon.url

 fetch(url)
 .then(response => response.json())
 .then((pokeData) =>{   
  
  name.innerText = pokeData.name
  number.innerText = pokeData.id

  const types = pokeData['types']
  const typesOne = types[0]
  const typesTwo = types[1]
  typeOne.innerText = typesOne['type']['name']

  if(typesTwo){
    typeTwo.innerText =  typesTwo['type']['name']
  }else{
    typeTwo.classList.add('hide')
    typeTwo.innerText = ''
  }

  card.classList.add(typesOne['type']['name'])

  image.src = pokeData['sprites']['front_default']
  
  })
    
}

function renderPokemons(pokemon){
 
    
}

function createTypes(types, ul){
  types.forEach((type) => {
  let typeLi = document.createElement('li');
  typeLi.innerText = type['type']['name'];
  ul.append(typeLi)
  })
}

async function getPokemons(params){
    await fetch(POKEAPI)
    .then(function(response){        
        response.json()
        .then(function(pokemon){
            console.log(pokemon)
            
                
                main.innerHTML =''

                const pokemonEl = document.createElement('div')

                pokemonEl.classList.add('cards')

                pokemonEl.innerHTML = `
                <div class="cards">
                <div class="card green">
                  <span class="number">${pokemon.id}</span>
                  <div class="pokemon">
                    <div class="info">
                      <h2>${pokemon.name}</h2>
                      <span class="type">Grass</span>
                      <span class="type">Poison</span>
                    </div>
                    <div class="pokemon-img">
                      <img src="./images/image.svg" alt="" class="" />
                    </div>
                  </div>
                </div>
                </div>
                `

            
    
        
        })
    })
}

*/