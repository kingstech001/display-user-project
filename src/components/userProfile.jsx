import React from 'react'
import UserDetails from './userDetails'

const UserProfile = (users) => {
    return (
        users.map((user)=> {
            return(
                <UserDetails user={user} />
            )
        })
    )
}

export default UserProfile