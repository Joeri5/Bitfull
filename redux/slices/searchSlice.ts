import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";

interface SearchState {
    value: boolean;
}

const initialState: SearchState = {
    value: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleSearch} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
