import React from 'react'
import Nav from './Nav'
import User from './user/User'
import Post from './post/Post'
import Icons from './Icons'

const Profile = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Nav />
      <User />
      <Icons />
      <Post />
    </div>
  )
}

export default Profile