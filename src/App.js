import { Component, useState } from 'react';
import './App.css';
import Form from './components/Form';



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



function App() {
  return <div>
    <Form />
  </div>
}

export default App;
