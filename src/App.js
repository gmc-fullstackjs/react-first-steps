import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/Pokemon/PokemonCard';
import PokemonDetails from './components/Pokemon/PokemonDetails';
import { Route, Routes } from 'react-router-dom';


function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //   // Get all pokemons
  useEffect(() => {
    setIsLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then(async function (response) {
        // handle success
        setPokemons(response.data.results)
        setIsLoading(false)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return <ul className='pokemons-list'>
    {
      isLoading ? <>Loading ...</> : pokemons.map((p, idx) => {
        return <PokemonCard name={p.name} url={p.url} key={idx} />
      })
    }
  </ul>
}

function App() {

  return <div className='App'>

    <Routes>
      <Route path='/' element={<PokemonList />} />
      <Route path='/details/:name' element={<PokemonDetails />} />
    </Routes>
  </div>
}

export default App;
