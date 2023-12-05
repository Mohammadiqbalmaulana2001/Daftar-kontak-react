import React from 'react'


export const Profile = ({ name, username, bio, isVerified }) => {
    
  return (
    <div>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Bio</dt>
        <dd>{bio}</dd>
        <dt>Verified</dt>
        <dd>{isVerified ? 'Yes' : 'No'}</dd>
    </div>
  )
}
