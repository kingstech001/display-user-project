import React from 'react';
import UserDetails from './userDetails';

const Profile = ({data}) => {
    return (
        data.map((user) => {
            return(
                <div className="user_detail">
                        <UserDetails key={user.name} user={user} />
                </div>
            );
        })
    );
};

export default Profile;