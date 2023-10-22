import React from 'react'

const ChatMessage = ({ name, message }) => {

    return (
        <div>
            <div className='flex my-2 px-2 py-1 bg-slate-100 '>
                <img className='w-8 h-8 ml-2 border border-black rounded-full' alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"></img>
                <span className='mx-2 font-bold'>{name}</span>
                <span>{message}</span>
            </div>
        </div>
    )
};

export default ChatMessage;