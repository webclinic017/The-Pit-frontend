import {
    CURRENT_USER,
    FETCH_USER_BY_TOKEN,
    SIGN_UP
} from './types'
import {
    login
} from '../../utils/detect-auth'

export const loginUser = (values, history, setSubmitting) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();

            if (response.status === 200) {
                login(data.token);
                setSubmitting(false)
                history.push('/dashboard')
                return dispatch({
                    type: CURRENT_USER,
                    payload: data
                });
            } else {
                return console.log(data);
            }
        } catch (err) {
            console.log(err.response.data);
        }
    };
};

export const fetchUserBytoken = (
    token, history
) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'http://localhost:3000/api/v1/currentuser', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const data = await response.json();

            if (response.status === 200) {
                // history.push('/dashboard')
                return dispatch({
                    type: FETCH_USER_BY_TOKEN,
                    payload: data
                })
            } else {
                return console.log(data);
            }
        } catch (err) {
            return console.log(err);
        }
    };
};


export const signupUser = (values, history, setSubmitting) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)

            })
            const data = await res.json();

            if (res.status === 201) {
                login(data.token);
                setSubmitting(false)
                // history.goBack();
                return dispatch({
                    type: SIGN_UP,
                    payload: data
                });
            } else {
                return console.log(data);
            }

        } catch (err) {
            return console.log(err.response.data)
        }
    };
};