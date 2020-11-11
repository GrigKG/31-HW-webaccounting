import {ERROR, REQUEST, SUCCESS} from "../actions/webActions";

export const webReducer = (state, action) =>{
    switch (action.type) {
        case REQUEST:
        case ERROR:
            return{...state, message: action.payload}
        case SUCCESS:
            return{...state, userInfo: action.payload, message: null}
        default:
            return state;
    }
}