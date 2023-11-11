import React from 'react'

function Profile({user}) {
  return (
    <div className='box'>
        <div className='CCC'>Profile</div>
        <p>User : {user.username} </p>
        <p>Name : {user.firstname} {user.lastname}</p>
        <p>Tel : {user.tel}</p>
    </div>
  )
}

export default Profile