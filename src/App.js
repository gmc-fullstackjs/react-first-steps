import { Component, useState } from 'react';
import './App.css';
// import Form from './components/Form';



// function App() {

//   const [count, setCount] = useState(0)


//   function inc() {
//     setCount(count + 1)
//     console.log("Count incremented ", count)
//   }

//   console.log(count)



//   return <div>
//     <p>You clicked me {count}</p>
//     <button className='btn btn-primary'
//       onClick={inc}
//     >
//       Increment
//     </button>
//   </div>
// }


class App2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }



    // To pass this object to function
    this.inc = this.inc.bind(this)
  }


  inc() {

    // Don't mutate state direclty
    // this.state.count++

    // Update the DOM based on sate change
    this.setState({
      count: this.state.count + 1
    })
    console.log("Count incremented ", this.state.count)
  }



  render() {
    return <div>
      <p>You clicked me {this.state.count}</p>
      <button className='btn btn-primary'
        onClick={this.inc}
      >
        Increment
      </button>
    </div>
  }
}


function Hello() {
  return <div>
    You are authenticated
  </div>
}


function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsAuthenticated(true)
    }
  }

  return <div>
    {
      isAuthenticated ?
        <div>
          <Hello />
        </div>
        : <form>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"

              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <button className="btn btn-primary"
            onClick={handleLogin}
          >Login</button>
        </form>
    }
  </div>
}

export default App;
