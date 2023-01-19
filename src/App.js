import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/Pokemon/PokemonCard';
import PokemonDetails from './components/Pokemon/PokemonDetails';




function App() {

  const [pokemons, setPokemons] = useState([])
  const [selectedPokemonName, setSelectedPokemonName] = useState(undefined)
  const [pokemon, setPokemon] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  // Get all pokemons
  useEffect(() => {
    setIsLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then(async function (response) {
        // handle success
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
        })
        setPokemons(response.data.results)
        setIsLoading(false)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (selectedPokemonName) {
      setIsLoading(true)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}/`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setPokemon(response.data)
          setIsLoading(false)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }, [selectedPokemonName])

  function handleSelectPokemon(name) {
    setSelectedPokemonName(name)

  }




  return <div className='App'>
    <h1>My Pokedex</h1>

    {
      isLoading ? <>Loading ...</> :
        selectedPokemonName ? <PokemonDetails pokemon={pokemon} handleSelectPokemon={handleSelectPokemon} /> :
          <ul className='pokemons-list'>
            {
              pokemons.map((p, idx) => {
                return <PokemonCard name={p.name} url={p.url} handleSelectPokemon={handleSelectPokemon} key={idx} />
              })
            }
          </ul>

    }

  </div>
}

export default App;
