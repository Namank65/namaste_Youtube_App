import React from 'react';
import Buttons from './Buttons';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Buttons/>
      <Buttons name={"Gaming"}/>
      <Buttons/>
      <Buttons/>
    </div>
  )
}

export default ButtonList;