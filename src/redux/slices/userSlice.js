import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

// utils
import {
    login
} from '../../utils/detect-auth';

export const loginUser = createAsyncThunk('users/login', async (values, {
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
            return data;
        } else {
            return rejectWithValue(data);
        }
    } catch (err) {
        rejectWithValue(err.response.data);
    }
});


export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({
        token
    }, thunkAPI) => {
        try {
            const response = await fetch(
                'http://localhost:3000/api/v1/currentuser', {
                    headers: {
						Authorization: `Bearer ${token}`
					}
                }
            );
            let data = await response.json();
            console.log('data', data, response.status);

            if (response.status === 200) {
                return {
                    ...data
                };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const initialState = {
    user: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
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
        },
        [fetchUserBytoken.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, {
            payload
        }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.user = payload;
        },
        [fetchUserBytoken.rejected]: (state, {payload}) => {
            console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload
        },
    }
});

export const {
    reset
} = userSlice.actions;