import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './PokemonDetails.css'


function PokemonDetails({ pokemon, handleSelectPokemon }) {

    function handleGoBack() {
        handleSelectPokemon(undefined)
    }

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
                            onClick={handleGoBack}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                </>

                : <></>
        }
    </div>
}

export default PokemonDetails;
