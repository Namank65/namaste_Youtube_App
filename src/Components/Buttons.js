import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className='p-1 px-2 m-2 rounded bg-slate-300'>{name}</button>
    </div>
  )
};

export default Buttons;