import {createSlice} from "@reduxjs/toolkit";

const SearchAreaSlice = createSlice({
    name: "searchArea",
    initialState:{
        visible: true
    },
    reducers:{
        changeState(state){
            state.visible = !state.visible
        }
    },
});

export default SearchAreaSlice.reducer;
export const {changeState} = SearchAreaSlice.actions;