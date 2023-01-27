import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {User} from "../../api/types";

interface AuthState {
    user: User | null;
    loading: boolean;
    refreshAuth: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: true,
    refreshAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        refreshAuth: (state) => {
            state.refreshAuth = !state.refreshAuth;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        }
    },
});

export const selectAuth = (state: RootState) => state.auth;

export const {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;
