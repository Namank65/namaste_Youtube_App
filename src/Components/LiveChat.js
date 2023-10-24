import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/ChatSlice';
import { generateRandomName } from '../utils/Helper';
import { generateRandomMessage } from '../utils/Helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.message)
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("Api polling")
            dispatch(addMessages({
                name: generateRandomName(),
                message: generateRandomMessage(35) + "🧡"
            }))
        }, 2000)



        return () => clearInterval(i)
    }, [])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(addMessages({
                name: "Naman Kumar",
                message: liveMessage
            }))
            {setLiveMessage("")}
        }}>

            <h1 className='font-bold mb-2'>Live Chat</h1>

            <div className=' flex mx-4 border border-black h-[500px] w-[550px] rounded-lg overflow-y-scroll flex-col-reverse'>
                {chatMessages.map((mess, index) => <ChatMessage key={index} name={mess.name} message={mess.message} />)}
            </div>
            <div className='border border-black w-[550px] ml-4 rounded-lg p-2'>
                <input className='w-[450px] p-2 outline-none' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} placeholder='Message' />
                <button className=' p-1 px-4 rounded-lg bg-green-300'>Send</button>
            </div>
                
        </form>
    )
};

export default LiveChat;