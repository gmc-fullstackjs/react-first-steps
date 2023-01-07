
import React from 'react';
import './Card.css'

function Card(props) {
    // console.log(props)
    // props.text = "MODIFIED"
    return <div className='card' key={props.key}>
        {props.text}
    </div>

}

Card.defaultProps = {
    text: 'DEFAULT'
}

export default Card;
