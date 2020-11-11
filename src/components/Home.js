import React from 'react';
import {Link} from 'react-router-dom';
import {loginPage, regPage} from "../utils/Constants";

const Home = () => {
    return (
        <div>
            <Link to={`/${loginPage}`} className="nav-item btn btn-outline-info">Login</Link>
            <Link to={`/${regPage}`} className="nav-item btn btn-outline-info">Registration</Link>
        </div>
    );
};

export default Home;