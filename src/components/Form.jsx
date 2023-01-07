import React from 'react';
import { useState } from 'react';

function Form() {
    const [username, setUsername] = useState('')
    function printUsername(e) {
        e.preventDefault()
        alert(username)
    }
    return <form className='form'>
        <label>Username</label>
        <input className='form-control m-2'
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            value={username}
        />
        <button className='btn btn-primary m-2' onClick={printUsername}>Print Username</button>
        <p>
            User is: {username}
        </p>
    </form>;
}

export default Form;
