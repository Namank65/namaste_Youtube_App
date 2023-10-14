import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.reduxS.isMenuOpen)

  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 text-left w-48 shadow-lg bg-slate-200'>
      <ul className='border-b border-gray-500 pb-2'>
      <Link to={'/'}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptons</li>
      </ul>
      <ul className='border-b border-gray-500 pb-2 pt-2'>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar;