import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage, regPage} from "../utils/Constants";

const Account = props => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const type = props.pageType
    const buttonName = type === regPage ? "Register" : "Login"

    return (
        <div>
            <input
                onChange={event => setLogin(event.target.value)}
                type='text'
                placeholder='login'/>
            <input
                onChange={event => setPassword(event.target.value)}
                type='password'
                placeholder='password'/>
            {type === regPage &&
            <div>
                <input
                    onChange={event => setFirstName(event.target.value)}
                    type='text'
                    placeholder='First Name'/>
                <input
                    onChange={event => setLastName(event.target.value)}
                    type='text'
                    placeholder='Last Name'/>
            </div>}

            <Link
                onClick={() => props.getAccount(type, login, password, firstName, lastName)}
                to={`/${profilePage}`}
                className="nav-item btn btn-info">
                {buttonName}
            </Link>
        </div>
    );
};

export default Account;