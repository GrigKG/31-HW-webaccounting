import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Account from "./containeras/AccountContainer";
import Profile from "./containeras/ProfileContainer";
import {Link, Route, Switch} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import {homePage, loginPage, profilePage, regPage} from "./utils/Constants";
import React from "react";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to={`/${homePage}`} className="nav-item btn btn-outline-info">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
                <br></br>
                <Switch>
                    <Route path={[`/`,`/${homePage}`]} exact component={Home}/>
                    <Route path={[`/${loginPage}`]} exact render={()=><Account pageType={loginPage}/>}/>
                    <Route path={`/${regPage}`}  exact render={()=><Account pageType={regPage}/>}/>
                    <Route path={`/${profilePage}`} exact component={Profile}/>
                    <Route exact component={ErrorPage}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
