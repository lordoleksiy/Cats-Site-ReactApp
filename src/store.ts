import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slices/images-slice.ts";
import SearchAreaSlice from "./slices/search-area-slice.ts";

const store = configureStore({
    reducer: {
        images: imagesSlice,
        searchArea: SearchAreaSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;