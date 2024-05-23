import React from 'react';

const UserDetails = ({ user }) => {
    const { name, description, dateOfBirth } = user;
    return (
        <>
            <h2>{`Name: ${name}`}</h2>
            <p>{`Bio: ${description}`}</p>
            <p>{`Date of birth: ${dateOfBirth}`}</p>
        </>
    );
};

export default UserDetails;