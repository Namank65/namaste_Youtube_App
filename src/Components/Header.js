import React from 'react';

const Header = () => {
  return (
    <div className='grid grid-flow-col m-2 p-5 shadow-lg'>
      <div className='flex col-span-1'>
        <svg className='h-6 mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        <img className='h-7' alt=' youTubelogo' src='https://image.shutterstock.com/image-photo/image-260nw-2310134969.jpg' />
      </div>

      <div className='h-8 col-span-10'>
        <input placeholder='Search' type='text' className='border border-gray-400 w-6/12 rounded-l-full px-4 py-1'/>
        <button className='border border-gray-400 px-5 py-1 rounded-r-full bg-slate-200'>🔍</button>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> */}
      </div>

      <div className='h-8 col-span-1'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
      </div>
    </div>
  )
};

export default Header;