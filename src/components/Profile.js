import React, {useState} from 'react';
import EditContainer from "../containeras/EditContainer";
import {editPassword, editProfile} from "../utils/Constants";


const Profile = ({user, message}) => {

    const [type, setType] = useState('');

    const handleLogout = () => {
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('password');
    }

    return (
        <div>
            {!message &&
            <div>
                <h1>First Name: {user.firstName}</h1>
                <h1>Last Name: {user.lastName}</h1>
                <p>login: {user.login}</p>
                <p>role: {user.roles}</p>
                <button
                    onClick={() => setType(type?'':editProfile)}
                    className="nav-item btn btn-info">
                    Edit profile
                </button>
                <button
                    onClick={() => setType(type?'':editPassword)}
                    className="nav-item btn btn-info">
                    Change password
                </button>
                <button
                    onClick={handleLogout}
                    className="nav-item btn btn-info">
                    Logout
                </button>
                {type && <EditContainer typeEdit={type}/>}
            </div>
            }
            <p>{message}</p>
        </div>
    );
};

export default Profile;