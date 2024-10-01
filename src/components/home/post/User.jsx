import React from 'react'

const User = ({user}) => {
  return (
    <div className='px-4 flex items-center gap-2'>
      <div className='w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.profileImage.url} alt="" />
      </div>
      <div className='flex items-center gap-x-1'>
        <h4 className='text-lg md:text-xl'>{user.username}</h4>
        <h6 className='text-sm mt-1 opacity-70'>1d</h6>
      </div>
    </div>
  )
}

export default User