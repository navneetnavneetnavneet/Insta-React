import React from 'react'
import instagram from "/instagram.webp"

const Loading = () => {
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <img className='w-1/2' src={instagram} alt="" />
    </div>
  )
}

export default Loading