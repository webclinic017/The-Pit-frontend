import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

// utils
import {
    login
} from '../../utils/detect-auth';

export const loginUser = createAsyncThunk('users/login', async (values, history, setSubmitting, {
    rejectWithValue
}) => {
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
            history.push('/dashboard')
            setSubmitting(false)
            return data;
        } else {
            return rejectWithValue(data);
        }
    } catch (err) {
        rejectWithValue(err.response.data);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },
    reducer: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            state.user = payload;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, {
            payload
        }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        }
    }
});

export const {
    clearState
} = userSlice.actions;

export const userSelector = (state) => state.user;