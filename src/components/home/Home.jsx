import React from 'react'
import Nav from './nav/Nav'
import StoryDiv from './story/StoryDiv'
import PostDiv from './post/PostDiv'

const Home = () => {
  return (
    <div className='w-full min-h-screen pb-20 bg-zinc-900'>
        <Nav />
        <StoryDiv />
        <PostDiv />
        <PostDiv />
        <PostDiv />
        <PostDiv />
        <PostDiv />
    </div>
  )
}

export default Home