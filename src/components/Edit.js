import React, {useState} from 'react';
import {editPassword, editProfile, regPage} from "../utils/Constants";

const Edit = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const login = sessionStorage.getItem('login');
    const password = sessionStorage.getItem('password');

    return (
        <div>
            {props.typeEdit === editProfile &&
            <div>
                <input
                    onChange={event => setFirstName(event.target.value)}
                    type='text'
                    placeholder='New first Name'/>
                <input
                    onChange={event => setLastName(event.target.value)}
                    type='text'
                    placeholder='New last Name'/>
            </div>}
            {props.typeEdit === editPassword &&
            <div>
                <input
                    onChange={event => setNewPassword(event.target.value)}
                    type='password'
                    placeholder='New password'/>
            </div>}
            <button
                onClick={() => props.getAccount(props.typeEdit, login, password, firstName, lastName, newPassword)}>
                Save
            </button>
        </div>
    );
};

export default Edit;