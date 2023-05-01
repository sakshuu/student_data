import { SHOW_SINGLE_STUDENT_FAIL, SHOW_SINGLE_STUDENT_REQUEST, SHOW_SINGLE_STUDENT_SUCCESS,  STUDENT_ADD_DATA_FAIL,  STUDENT_ADD_DATA_REQUEST,  STUDENT_ADD_DATA_SUCCESS, STUDENT_DELETE_PROFILE_FAIL, STUDENT_DELETE_PROFILE_REQUEST, STUDENT_DELETE_PROFILE_SUCCESS, STUDENT_SHOW_FAIL, STUDENT_SHOW_REQUEST, STUDENT_SHOW_SUCCESS, STUDENT_UPDATE_PROFILE_FAIL, STUDENT_UPDATE_PROFILE_REQUEST, STUDENT_UPDATE_PROFILE_SUCCESS } from "../constants/DataConstants";

export const studentsReducer = (  
    state = {allstudents:[] },
    { type, payload }
 ) => {
    switch (type) {
        case STUDENT_ADD_DATA_REQUEST : return {...state, loading: true}
        case STUDENT_ADD_DATA_SUCCESS : return {...state, students:true, loading: false}
        case STUDENT_ADD_DATA_FAIL : return {...state, error: payload, loading: false}

        case STUDENT_SHOW_REQUEST : return {...state, loading: true}
        case STUDENT_SHOW_SUCCESS : return {...state, allstudents:payload, loading: false}
        case STUDENT_SHOW_FAIL : return {...state, error: payload, loading: false}
         
        case SHOW_SINGLE_STUDENT_REQUEST: return{...state, loading: true}
        case SHOW_SINGLE_STUDENT_SUCCESS: return {...state, singleStudents:payload, loading: false}
        case SHOW_SINGLE_STUDENT_FAIL: return {...state, error:payload, loading: false}

        case STUDENT_UPDATE_PROFILE_REQUEST: return{...state, loading: true}
        case STUDENT_UPDATE_PROFILE_SUCCESS: return {...state, updateStudents:true, loading: false}        
        case STUDENT_UPDATE_PROFILE_FAIL: return {...state, error:payload, loading: false}

        case STUDENT_DELETE_PROFILE_REQUEST: return{...state, loading: true}
        case STUDENT_DELETE_PROFILE_SUCCESS: return {...state, removeStudents:true, loading: false}
        case STUDENT_DELETE_PROFILE_FAIL: return {...state, error:payload, loading: false}
        
    
        default: return state
            
    }
 }