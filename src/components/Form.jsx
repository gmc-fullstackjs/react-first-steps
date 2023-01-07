import React from 'react';
// import { useState } from 'react';

function Form() {
    // const [username, setUsername] = useState('')
    // function printUsername(e) {
    //     e.preventDefault()
    //     alert(username)
    // }
    return <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <button class="btn btn-primary">Login</button>
    </form>
}

export default Form;
