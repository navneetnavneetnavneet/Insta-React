import React from 'react'
import instagram from "/instagram.webp"

const Loading = () => {
  return (
    <div className='w-full md:w-1/3 md:mx-auto h-screen bg-zinc-900 flex items-center justify-center'>
        <img className='w-1/3' src={instagram} alt="" />
    </div>
  )
}

export default Loading