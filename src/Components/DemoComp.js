import React, { useState } from 'react'

const DemoComp = () => {

    const [text, setText] = useState("");


  return (
    <div className='h-96 w-96 m-5 p-5 border border-black'>
        <h1>Prime Number Generator</h1>
        <input className='border border-black p-2 m-3' type='number' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Number'/>
        <span>{text}</span>
        <button className='border border-black p-1 m-1 bg-green-300'>Calculate</button>
    </div>
  )
};

export default DemoComp;