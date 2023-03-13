import React,{useState} from 'react'

function HookAdvancedcounter() {

    const initialCount =0
    const [count,setCount] = useState(initialCount)

  return (
    <div>
        count: {count}
    
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={()=> setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default HookAdvancedcounter