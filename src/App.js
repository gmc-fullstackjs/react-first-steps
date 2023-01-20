import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/Pokemon/PokemonCard';
import PokemonDetails from './components/Pokemon/PokemonDetails';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';


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


// const Home = () => {
//   return <div>
//     Home page
//   </div>
// }


// const Login = () => {

//   return <div>
//     Login page
//   </div>
// }


// const Contact = () => {
//   return <div>
//     Contact page
//   </div>
// }


// const User = (props) => {
//   const params = useParams()
//   const location = useLocation()
//   // console.log(params)
//   console.log(location)

//   return <div>
//     Users
//   </div>
// }

// function App() {
//   return <div className='App'>
//     <div>
//       <Link to={"/"} >Go to home</Link>
//       {/* <a href='/'>Go to home</a> */}
//       <Link to={"/login"}>Go to Login</Link>
//       <Link to={"/contact"}>Go to contact</Link>
//       <Link to={"/users/1"}>User 1</Link>
//       <Link to={"/users/2"}>User 2</Link>


//     </div>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='/users/:id' element={<User />} />
//     </Routes>
//   </div>
// }

export default App;
