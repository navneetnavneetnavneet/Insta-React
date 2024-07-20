import React from 'react'
import UserDets from './UserDets'
import Button from './Button'
import Username from "./Username"

const User = ({user}) => {
  return (
    <div>
      <UserDets user={user} />
      <Username fullName={user.fullName} />
      <Button />
    </div>
  )
}

export default User