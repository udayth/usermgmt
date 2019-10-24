import {
    SET_SEARCHED_USER,
    USER_LOADING
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    //  isAuthenticated: false,
    search: [],
    loading: false
};
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SEARCHED_USER:
            return {
                ...state,
                //  isAuthenticated: !isEmpty(action.payload),
                search: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}