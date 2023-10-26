import React, { useMemo, useState } from 'react';
import {findPrime} from '../utils/Helper';

const DemoComp = () => {

    const [text, setText] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const prime = useMemo(() => findPrime(text), [text]);

    console.log("Is rendering...")


  return (
    <div className={"h-96 w-96 m-5 p-5 border border-black" + (isDark && "bg-black text-red-500")}>
        <h1>Prime Number Generator</h1>
        <input className='border border-black p-2 m-3' type='number' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Number'/>
        <span>{prime}</span>
        <button className='border border-black p-1 m-1 bg-green-300'>Calculate</button>
        <button className='border border-black p-1 m-1 bg-red-300' onClick={() => setIsDark(!isDark)}>Toggle</button>
    </div>
  )
};

export default DemoComp;