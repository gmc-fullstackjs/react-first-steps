
function PokemonDetails({ pokemon, handleSelectPokemon }) {

    function handleGoBack() {
        handleSelectPokemon(undefined)
    }

    return <div className="pokemon-details">
        {
            pokemon ? <><div>
                <span>Abilities</span>
                <ul>
                    {pokemon.abilities.map((a, idx) => {
                        return <li key={idx}>{a.ability.name}</li>;
                    })}
                </ul>
            </div><div>
                    Base experience: {pokemon.base_experience}
                </div>
                <button className="btn btn-primary"

                    onClick={handleGoBack}
                >Back</button>
            </> : <></>
        }
    </div>
}

export default PokemonDetails;
