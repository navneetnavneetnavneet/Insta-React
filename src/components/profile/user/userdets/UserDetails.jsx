import React from 'react'

const UserDetails = () => {
  return (
    <div className='flex items-center justify-center gap-10'>
        <div className='flex flex-col items-center'>
            <h3>12345</h3>
            <h3>Post</h3>
        </div>
        <div className='flex flex-col items-center'>
            <h3>3982</h3>
            <h3>Follower</h3>
        </div>
        <div className='flex flex-col items-center'>
            <h3>8347</h3>
            <h3>Following</h3>
        </div>
    </div>
  )
}

export default UserDetails