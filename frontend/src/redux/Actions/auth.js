import axios from "axios"
import { AUTH_LOGIN__FAIL, AUTH_LOGIN__REQUEST, AUTH_LOGIN__SUCCESS, AUTH_SIGNUP_FAIL, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS } from "../constants/auth"

export const signUpstudents = addData => async dispatch => {
    try {
        dispatch({type: AUTH_SIGNUP_REQUEST})
        const {data} = await axios.post("http://localhost:5000/auth", addData)
        dispatch({type: AUTH_SIGNUP_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: AUTH_SIGNUP_FAIL, payload: error.massage})
    }
}

 export const loginstudents = loginData => async dispatch => {
     try {
         dispatch({type: AUTH_LOGIN__REQUEST})
         const {data} = await axios.get("http://localhost:5000/auth")
         const result = data.find(item => item.email == loginData.email && item.password === loginData.password)
         dispatch({type: AUTH_LOGIN__SUCCESS, payload: result})
     } catch (error) {
         dispatch({type: AUTH_LOGIN__FAIL, payload: error.massage})
     }
 }