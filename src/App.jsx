import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  // arrow function
  const handleClick2 = () =>{
    alert('button click again')
  }

  const addToSix = (num) =>{
    alert(num + 6);
  }
  

  return (
    <>
      
      <h3> React core concepts 2</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Again</button>
      <button onClick={() =>{alert('Click Me third')}}>Click Third Time
      </button>
      {/* <button onClick={addToSix(3)}>five</button> */}
      <button onClick={() => addToSix(4)}>five</button>
      
    </>
  )
}

export default App
