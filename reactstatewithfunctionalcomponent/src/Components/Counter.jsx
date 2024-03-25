import { useState } from "react"


const Counter = () => {

    const[count, setCount] = useState(0);
    const[error, setError] = useState('');

    const incr = () => {
        setCount(count+1);
    }
    const decr = () => {
        if(count <= 0){
            setError("Count should be equals or greater than zero")
        }else{
            setCount(count-1);
        }
        
    }
    const reset = () => {
        setCount(0);
        setError("")
    }

    return(
        <div className='counter'>
    <p> Count: {count}</p>    
    <p className="error">{error}</p>
       <div className='buttons'>
           <button onClick={incr}>+</button>
           <button onClick={decr}>-</button>
           <button onClick={reset}>Reset</button>
        </div>
    </div>
    )
}

export default Counter