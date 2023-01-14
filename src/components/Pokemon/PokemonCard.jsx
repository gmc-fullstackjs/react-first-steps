import React from 'react';
import './PokemonCard.css'
import axios from 'axios';

function PokemonCard({ name, handleSelectPokemon }) {
    // function handleGetPokemonDetails() {

    // }

    return <div className='card' onClick={() => {
        handleSelectPokemon(name)
    }}>
        {name}
    </div>;
}

export default PokemonCard;
