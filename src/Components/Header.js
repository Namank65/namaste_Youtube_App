import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/ReduxSlice';
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import {cashResults} from "../utils/SearchSlice";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSeggestions] = useState([]);
  const [showSuggestions, setShowSeggestions] = useState(false);
  const Dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);


  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSeggestions(searchCache[searchQuery])
      } else {
        getSearchSegetion()
      }
    }, 200);

    return () => {
      clearTimeout(timer)
    };

  }, [searchQuery])

  const toggleMenuHandeler = () => {
    Dispatch(toggleMenu());
  };

  const getSearchSegetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSeggestions(json[1]);

    Dispatch(cashResults({
      [searchQuery]: json[1]
      // cisdchsd: [21453, 256, 2156]
    }));
  };

  return (
    <div className='grid grid-flow-col p-5 shadow-lg bg-white'>
      <div className='flex col-span-1 '>
        <svg className='h-6 mr-5 cursor-pointer' onClick={toggleMenuHandeler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        <img className='h-7' alt=' youTubelogo' src='https://image.shutterstock.com/image-photo/image-260nw-2310134969.jpg' />
      </div>

      <div className='h-8 col-span-10'>
        <div>
          <input placeholder='Search' type='text' value={searchQuery} className='border border-gray-400 w-6/12 rounded-l-full px-4 py-1' onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSeggestions(true)} onBlur={() => setShowSeggestions(false)} />
          <button className='border border-gray-400 px-5 py-1 rounded-r-full bg-slate-200'>🔍</button>
        </div>

        {showSuggestions && <div className='fixed bg-white py-2 px-5 mx-60 w-[500px] rounded-lg shadow-lg'>
          <ul>
            {suggestions.map((sugg) => <li className='text-left p-2 hover:bg-slate-100 rounded-md' key={sugg}>🔍 {sugg}</li>)}
          </ul>
        </div>}
      </div>

      <div className='h-8 col-span-1'>
        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
      </div>
    </div>
  )
};

export default Header;