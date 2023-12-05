import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState[7];
    const incr = ()=> {
        setCount(count+1);
    }
  return (
   
      <div>
        <p>cCount: {count}</p>
        <button onClick={incr}>Increase</button>
      </div>
   
  )
}

export default Counter
