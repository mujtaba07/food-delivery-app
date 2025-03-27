import React from 'react'
import { useState } from 'react'
const User = ({name}) => {

  const [count, setCount] = useState(0)
  return (
    <div className='user-card'>
      <div>count : {count}</div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>This is func based Comp</h1>
        <div>Name: {name}</div>
        <div>Location : Mumbai</div>
        <div>Contact: ABC@gmail.com</div>
    </div>
  )
}

export default User