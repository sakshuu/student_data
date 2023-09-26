import { AUTH_LOGIN__FAIL, AUTH_LOGIN__REQUEST, AUTH_LOGIN__SUCCESS, AUTH_SIGNUP_FAIL, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS } from "../constants/auth";

export const auth = (
    state = {studentauth : []},
    {type, payload}
) => {
    switch (type) {
         case AUTH_LOGIN__REQUEST: return {...state}
         case AUTH_LOGIN__SUCCESS: return {...state, authlogin: payload}
         case AUTH_LOGIN__FAIL: return {...state, error: payload}

        case AUTH_SIGNUP_REQUEST: return {...state}
        case AUTH_SIGNUP_SUCCESS: return {...state, auth: true}
        case AUTH_SIGNUP_FAIL: return {...state, error: payload}
             
    
        default: return state
    }
}