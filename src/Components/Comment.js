import React from 'react'

const Comment = ({ commData }) => {
  const { name, text, reply } = commData;
  return (
    <div className='flex bg-slate-300 shadow-lg p-4 my-4 rounded-lg'>
      <img className='w-8 h-8  mr-4 border border-black rounded-full p-1' alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"></img>

      <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
};

export const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  commData={comment} />

      <div className='pl-5 border border-l-black ml-5'>
      <CommentsList comments={comment.reply}/>
      </div>
    </div>
  ));
}

export default Comment;