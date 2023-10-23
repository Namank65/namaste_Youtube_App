import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/ChatSlice';
import { generateRandomName } from '../utils/Helper';
import { generateRandomMessage } from '../utils/Helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.message)

    useEffect(() => {
        const i = setInterval(() => {
            console.log("Api polling")
            dispatch(addMessages({
                name: generateRandomName(),
                message: generateRandomMessage(35) + "🧡"
            }))
        }, 2000)



        return () => clearInterval(i)
    }, [])

    return (
        <div className='mx-4 border border-black h-[500px] w-[550px] rounded-lg overflow-y-scroll'>
            <h1 className='font-bold my-4'>Live Chat</h1>
            {chatMessages.map((mess, index) => <ChatMessage key={index} name={mess.name} message={mess.message} />)}
        </div>
    )
};

export default LiveChat;