import React from 'react'

const User = () => {
  return (
    <div className='px-4 flex items-center gap-2'>
      <div className='w-[10vw] h-[10vw] rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='flex items-center gap-x-1'>
        <h4 className='text-lg'>username</h4>
        <h6 className='text-sm mt-1 opacity-70'>1d</h6>
      </div>
    </div>
  )
}

export default User