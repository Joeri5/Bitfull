import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface FormState {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phone: string;
    username: string;
    profilePicture: string;
}

const initialState: FormState = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    username: '',
    profilePicture: '',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        }
    }
});

export const {
    setEmail,
    setPassword,
    setConfirmPassword,
    setFirstName,
    setLastName,
    setPhone,
    setUsername,
    setProfilePicture
} = formSlice.actions;

export const selectEmail = (state: RootState) => state.form.email;
export const selectPassword = (state: RootState) => state.form.password;
export const selectConfirmPassword = (state: RootState) => state.form.confirmPassword;
export const selectFirstName = (state: RootState) => state.form.firstName;
export const selectLastName = (state: RootState) => state.form.lastName;
export const selectPhone = (state: RootState) => state.form.phone;
export const selectUsername = (state: RootState) => state.form.username;
export const selectProfilePicture = (state: RootState) => state.form.profilePicture;

export default formSlice.reducer;
