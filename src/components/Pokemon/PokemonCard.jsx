import React from 'react';
import './PokemonCard.css'
import { useNavigate } from 'react-router-dom';

function PokemonCard({ name }) {

    const navigate = useNavigate()

    return <div className='card' onClick={() => {
        navigate(`/details/${name}`)
    }}>
        {name}
    </div>;
}

export default PokemonCard;
