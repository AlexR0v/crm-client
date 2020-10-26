import axios from 'axios';
<<<<<<< HEAD
import { setUserData } from '../redux/auth-reducer';
=======
import { setUserData, removeUserData } from '../redux/auth-reducer';
>>>>>>> santiago/feature/test-repo
import { pushError, clearErrorList } from '../redux/error-reduser';

export const login =  (identifier, password, remember = false) => {
    return async dispatch => {
        dispatch(clearErrorList());
        try {
            const res = await axios.post(`http://18.184.124.193/api/v1/login`, {
                identifier,
                password, 
                remember
            });
            if(res.data.success) {
                dispatch(setUserData(res.data));
                localStorage.setItem('token', res.data.token);
<<<<<<< HEAD
                window.location = '/';
            }else{
                if(res.data.is_need_verify) {
                    dispatch(setUserData({id: res.data.user_id}));
                    console.log(window.store.getState().auth)
                    window.location = '/verify';
                }else {
=======
            }else{
                if(res.data.is_need_verify) {
                    console.log(res.data.user_id);
                    localStorage.setItem('user_id', res.data.user_id);
                    localStorage.setItem('phone', res.data.phone);
                    dispatch(setUserData({id: res.data.user_id}));
                    window.location = '/verify'
                } else {
>>>>>>> santiago/feature/test-repo
                    dispatch(pushError(res.data.errors));
                }
            }          
        } catch (e) {
            dispatch(pushError(e));
        }
    }
}

export const verify = (user_id, code) => {
    return async dispatch => {
<<<<<<< HEAD
        dispatch(clearErrorList());
=======
        (clearErrorList());
>>>>>>> santiago/feature/test-repo
        try {
            const res = await axios.post(`http://18.184.124.193/api/v1/verify`, { user_id, code });
            if(res.data.success) {
                dispatch(setUserData(res.data));
                localStorage.setItem('token', res.data.token);
                window.location = '/';
            }else{
                dispatch(pushError(res.data.errors));
            }          
        } catch (e) {
            dispatch(pushError(e));
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> santiago/feature/test-repo
