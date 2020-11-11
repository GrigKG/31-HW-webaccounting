import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {webReducer} from "../reducers/webReducer";

const initialState={
    message:'NO NAME'
}

export const store = createStore(webReducer, initialState, applyMiddleware(thunk));