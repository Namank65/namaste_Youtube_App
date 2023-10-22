import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/ChatSlice';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.message)

    useEffect(() => {
        const i = setInterval(() => {
            console.log("Api polling")
            dispatch(addMessages({
                name: "Naman singh",
                message: "Hey i am on this live chat and i love it🧡"
            }))
        }, 2000)

        

        return () => clearInterval(i)
    }, [])

    return (
        <div className='mx-4 border border-black h-[500px] w-[550px] rounded-lg '>
            <h1 className='font-bold my-4'>Live Chat</h1>
            { chatMessages.map((mess, index) => <ChatMessage key={index} name={mess.name} message={mess.message}/>)}
        </div>
    )
};

export default LiveChat;