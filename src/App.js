import './App.css';
import ClassBasedCard from './components/Card/ClassBasedCard';

// import Card from './components/Card/Card'
// import cards from './data/cards'
import TableItem from './components/TableItem';
// import cards from './data/cards';
import pokemons from './data/pokemon';

// function App() {

//   console.log(cards)
//   return (
//     <div className="App">
//       {
//         cards.map((card) => {
//           return <Card name={card.name} image={card.image} type={card.type} >

//           </Card>
//         })
//       }


//     </div>
//   );
// }
// function App() {
//   return <div className='App'>
//     <table className='table'>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Type</th>
//         </tr>
//       </thead>

//       <tbody>

//         {
//           pokemons.map(p => {
//             return <TableItem id={p.id} name={p.name} type={p.type} />
//           })
//         }

//       </tbody>
//     </table>
//   </div>
// }



function Form() {
  return <form>
    <label>Username</label>
    <input />

    <button
      onClick={e => {
        e.preventDefault()
      }}
    >Submit</button>

  </form>
}


function App() {

  return <div>
    <ClassBasedCard text="Hello" name="name" />
  </div>
}

export default App;
