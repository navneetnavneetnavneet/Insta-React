import React from 'react'
import ProfileImage from './ProfileImage'
import UserDetails from './UserDetails'

const UserDets = () => {
  return (
    <div className='w-full px-4 flex items-center justify-between text-white'>
      <ProfileImage />
      <UserDetails />
    </div>
  )
}

export default UserDets