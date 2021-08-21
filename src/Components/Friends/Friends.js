import React from 'react';
import { NavLink } from 'react-router-dom';

const Friends = ({friend}) => {
    const  {name, email, id} = friend
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id} <NavLink to={`/friend/${id}`}><button>Details...</button></NavLink> </p>
        </div>
    );
};

export default Friends;