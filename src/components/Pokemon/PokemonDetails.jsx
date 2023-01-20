import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './PokemonDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function PokemonDetails() {

    // const [isLoading, setIsLoading] = useState(false)
    const [pokemon, setPokemon] = useState(undefined)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        console.log("PARAMS", params)
        // Fetch new pokemon details

        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setPokemon(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [params])

    return <div className="pokemon-details container">
        {
            pokemon ?
                <>
                    <div className='left'>
                        <img src={pokemon.sprites.front_default} alt="pokemon_image" />
                        <div className='general'>
                            <div>
                                {pokemon.name}
                            </div>
                            <div className='badge'>
                                {pokemon.base_experience}
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div>
                            <div>Abilities</div>

                            <ul >
                                {pokemon.abilities.map((a, idx) => {
                                    return <li className='ability' key={idx}>{a.ability.name}</li>;
                                })}
                            </ul>
                        </div>
                        <button className="back btn"
                            onClick={() => navigate(-1)}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                </>

                : <>Loading ...</>
        }


    </div>
}

export default PokemonDetails;
