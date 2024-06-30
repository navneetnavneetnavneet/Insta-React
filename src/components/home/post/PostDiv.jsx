import React from 'react'
import Post from './Post'
import User from './User'
import Icons from './Icons'
import UserDetails from './UserDetails'

const PostDiv = () => {
  return (
    <div className='w-full min-h-[50vh] mt-10 text-white'>
        <User />
        <Post />
        <Icons />
        <UserDetails />
    </div>
  )
}

export default PostDiv