import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/48" alt="Tailwind css chat bubble component." />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>Hi! what is up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'></div>
    </div>
  )
}

export default Message