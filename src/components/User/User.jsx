import React from 'react';
import './User.css'
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const navigate = useNavigate();
    const buttonHandler = () =>{
        navigate(`/user/${user.id}`)
    }
    
    return (
        <div className='user'>
            <h3>{user.name}</h3>
            <p>email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p><Link to={`/user/${user.id}`}>User Info</Link></p>
            <button onClick={buttonHandler} >See User Info</button>
            
        </div>
    );
};

export default User;