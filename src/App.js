import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/Pokemon/PokemonCard';
import PokemonDetails from './components/Pokemon/PokemonDetails';




function App() {

  const [pokemons, setPokemons] = useState([])
  const [selectedPokemonName, setSelectedPokemonName] = useState(undefined)
  const [pokemon, setPokemon] = useState(undefined)

  // Get all pokemons
  useEffect(() => {
    console.log("COMPONENT MOUNTED OR UPDATED")
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then(function (response) {
        // handle success
        setPokemons(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (selectedPokemonName) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}/`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setPokemon(response.data)
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
    <ul className='pokemons-list'>
      {
        selectedPokemonName ? <PokemonDetails pokemon={pokemon} handleSelectPokemon={handleSelectPokemon} /> :
          pokemons.map((p, idx) => {
            return <PokemonCard name={p.name} url={p.url} handleSelectPokemon={handleSelectPokemon} key={idx} />
          })
      }
    </ul>

  </div>
}

export default App;
