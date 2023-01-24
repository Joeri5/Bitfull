import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {overlayMenuSlice} from "@/redux/slices/overlayMenuSlice";
import {searchSlice} from "@/redux/slices/searchSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        overlayMenu: overlayMenuSlice.reducer,
        search: searchSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
