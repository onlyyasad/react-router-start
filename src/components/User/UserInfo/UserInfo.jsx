import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const userInfo = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>{userInfo.name}</h3>
            <p>Username: {userInfo.username}</p>
            <p>Website: {userInfo.website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserInfo;