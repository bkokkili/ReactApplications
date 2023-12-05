import React from 'react'
import { useState } from 'react';
import './App.css'

const App = () => {
  
let task = '';
const[tasks, setTask] = useState([]);

const makeValue = (val) => {
  task = val;
}

const addtoList = () =>{
   setTask([task, ...tasks]);
   console.log(tasks)
}

const remove = (index) => {
 console.log('***remove*******');
 tasks.splice(index,1);
 setTask([...tasks])
}

return(
    <div >
      <input type='text' placeholder='Enter a Text' onChange={(e) => makeValue(e.target.value)}></input>
      <button onClick={addtoList}>Serach</button>

      <div>
       {
        tasks.map((val,index) => (
          <div key={val} className='task'>
            <p>{val}</p>
            <button onClick={() => remove(index)} className='buttonStyle'>X</button>
          </div>
        ))
       }
      </div>
  
    </div>
    )
    
}

export default App;