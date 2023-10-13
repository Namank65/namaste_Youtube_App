import React from 'react';
import Buttons from './Buttons';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Buttons name={"All"}/>
      <Buttons name={"Coding"}/>
      <Buttons name={"Gaming"}/>
      <Buttons name={"Traveling"}/>
      <Buttons name={"Food"}/>
      <Buttons name={"Podcast"}/>
      <Buttons name={"React.js"}/>
      <Buttons name={"Music"}/>
      <Buttons name={"Javascript"}/>
      <Buttons name={"Noodels"}/>
      <Buttons name={"Cooking"}/>
      <Buttons name={"Computer"}/>
      <Buttons name={"History"}/>
      <Buttons name={"Kids"}/>
    </div>
  )
};

export default ButtonList;