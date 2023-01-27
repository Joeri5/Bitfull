import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface OverlayMenuState {
    value: boolean;
}

const initialState: OverlayMenuState = {
    value: false,
}

export const overlayMenuSlice = createSlice({
    name: 'overlayMenu',
    initialState,
    reducers: {
        toggleOverlayMenu: (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleOverlayMenu} = overlayMenuSlice.actions;

export const selectOverlayMenu = (state: RootState) => state.overlayMenu.value;

export default overlayMenuSlice.reducer;
