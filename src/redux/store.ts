import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {overlayMenuSlice} from "./slices/overlayMenuSlice";
import {searchSlice} from "./slices/searchSlice";
import {authSlice} from "./slices/authSlice";
import {formSlice} from "./slices/formSlice";


export const store = configureStore({
    reducer: {
        // Add your reducers here
        overlayMenu: overlayMenuSlice.reducer,
        search: searchSlice.reducer,
        form: formSlice.reducer,
        auth: authSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
