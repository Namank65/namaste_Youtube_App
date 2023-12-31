import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/ReduxSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className='p-4 m-6'>
      <div className='flex'>
        <iframe className='rounded-xl' width="880" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <LiveChat/>
      </div>

      <div className='w-[900px]'>
        <CommentsContainer />
      </div>

    </div>
  )
};

export default WatchPage;