import {base_url, editPassword, editProfile, loginPage, regPage} from "../utils/Constants";

export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const requestWeatherActions = () => (
    {
        type: REQUEST,
        payload: '...pending'
    }
);

export const errorWeatherActions = EMessage => (
    {
        type: ERROR,
        payload: EMessage

    }
);

export const successWeatherActions = (data) => (
    {
        type: SUCCESS,
        payload: {
            firstName: data.firstName,
            lastName: data.lastName,
            login: data.login,
            roles: data.roles,
        }
    }
);

export const getAccountActions = (type, login, password, firstName, lastName, newPassword) => {
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('login', login);
    let init
    switch (type) {
        case loginPage:
            init = {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(login + ':' + password)}`
                }
            };
            break;
        case  regPage:
            init = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "login": login,
                    "password": password,
                })
            };
            break;
        case editProfile:
            type = regPage;
            init = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(login + ':' + password)}`
                },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName
                })
            };
            break;
        case editPassword:
            type = `${regPage}/password`;
            init = {
                method: 'PUT',
                headers: {
                    'X-Password': newPassword,
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(login + ':' + password)}`
                }
            };
            break;

        default:
            init = ''

    }

    return dispatch => {
        dispatch(requestWeatherActions());
        fetch(base_url + type, init)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(successWeatherActions(data)))
            .catch(e => {
                dispatch(errorWeatherActions(e.message));
            })
    }
}