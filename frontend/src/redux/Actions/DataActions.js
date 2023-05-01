import axios from "axios"
import { SHOW_SINGLE_STUDENT_FAIL, SHOW_SINGLE_STUDENT_REQUEST, SHOW_SINGLE_STUDENT_SUCCESS,  STUDENT_ADD_DATA_FAIL,  STUDENT_ADD_DATA_REQUEST,  STUDENT_ADD_DATA_SUCCESS, STUDENT_DELETE_PROFILE_FAIL, STUDENT_DELETE_PROFILE_REQUEST, STUDENT_DELETE_PROFILE_SUCCESS, STUDENT_SHOW_FAIL, STUDENT_SHOW_REQUEST, STUDENT_SHOW_SUCCESS, STUDENT_UPDATE_PROFILE_FAIL, STUDENT_UPDATE_PROFILE_REQUEST, STUDENT_UPDATE_PROFILE_SUCCESS } from "../constants/DataConstants"

export const StudentActions = AddData => async dispatch => {
    try {
        dispatch({ type: STUDENT_ADD_DATA_REQUEST })
        const { data } = await axios.post("/students", AddData)
        dispatch({ type: STUDENT_ADD_DATA_SUCCESS, payload:data})
    } catch (error) {
        dispatch({ type: STUDENT_ADD_DATA_FAIL, payload: error.message })
    }
}


export const ShowStudentActions = () => async dispatch => {
    try {
        dispatch({ type: STUDENT_SHOW_REQUEST })
        const { data } = await axios.get("/students")
        dispatch({ type: STUDENT_SHOW_SUCCESS , payload:data})
    } catch (error) {
        dispatch({ type: STUDENT_SHOW_FAIL, payload: error.message })
    }
}

export const ShowSingleDataActions = (id) => async dispatch => {
    try {
        // console.log(id);
        dispatch({ type: SHOW_SINGLE_STUDENT_REQUEST })
        const { data } = await axios.get(`/students/${id}`)
        console.log(data);
        dispatch({ type: SHOW_SINGLE_STUDENT_SUCCESS , payload:data})
    } catch (error) {
        dispatch({ type: SHOW_SINGLE_STUDENT_FAIL, payload: error.message })
    }
}
export const UpdateDataActions = (id,studentsData) => async dispatch => {
    try {
        // console.log(id);
        dispatch({ type: STUDENT_UPDATE_PROFILE_REQUEST })
        const { data } = await axios.put(`/students/${id}`, studentsData)
        console.log(data);
        dispatch({ type: STUDENT_UPDATE_PROFILE_SUCCESS , payload:data})
    } catch (error) {
        dispatch({ type: STUDENT_UPDATE_PROFILE_FAIL, payload: error.message })
    }
}
export const RemoveDataActions = (id) => async dispatch => {
    try {
        // console.log(id);
        dispatch({ type: STUDENT_DELETE_PROFILE_REQUEST })
        const { data } = await axios.delete(`/students/${id}`)
        console.log(data);
        dispatch({ type: STUDENT_DELETE_PROFILE_SUCCESS , payload:data})
    } catch (error) {
        dispatch({ type: STUDENT_DELETE_PROFILE_FAIL, payload: error.message })
    }
}






