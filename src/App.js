import React from 'react'
import { createStore,connect, compose } from 'rees'
import counter from './counter.state'

let store = createStore({},{counter});
//ui Counter
let Counter = ({value,handleIncrease,add}) => {
  return (
    <div>
      <button onClick={handleIncrease}> counter + </button>
      <button onClick={add}>counter-</button>
      <span> {value} </span>
    </div>
  )
}

// here,counter is a proxy object,increase is a function,so we must use:
// handleIncrease:(e)=>store.counter.increase()
// not handleIncrease:(e)=>store.counter.increase
 Counter= compose(
  store.provider,
  connect((props)=>({
    value:store.state.counter,
    handleIncrease:(e)=>store.counter.increase(),
    add:(e)=>{store.counter.add(-1)}
  }))
)(Counter)
function App(){
    return (
        <div>
            <Counter/>
        </div>
    )

}

export default App;
        

