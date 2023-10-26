import {createSlice} from "@reduxjs/toolkit";
import {addImage, removeFromLocalStorage} from "../services/localstorage-service.ts";
import {ImageDTO} from "../models/imageDTO.ts";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: [] as ImageDTO[],
        currentImage: {} as ImageDTO,
        userImages: [] as ImageDTO[],
        apiImages: [] as ImageDTO[]
    },
    reducers: {
        openImage: (state, action) => {
            state.currentImage = action.payload
        },
        closeImage: (state) => {
            state.currentImage = {url:"", id:-1};
        },
        openNext: (state) => {
            const index = state.images.findIndex(image => image.id === state.currentImage.id);
            if (index + 1 < state.images.length){
                state.currentImage = state.images[index + 1];
            }
        },
        openPrev: (state) => {
            const index = state.images.findIndex(image => image.id === state.currentImage.id);
            if (index > 0){
                state.currentImage = state.images[index - 1];
            }
        },
        setUserImages: (state, action) => {
            state.userImages = action.payload;
        },
        setApiImages: (state, action) => {
            state.apiImages = action.payload;
        },
        chooseUserImages(state){
            state.images = state.userImages;
        },
        chooseApiImages(state){
            state.images = state.apiImages;
        },
        addToUserImages(state, action){
            const existingImage = state.userImages.find(image => image.id === action.payload.id);
            if (!existingImage) {
                state.userImages.push(action.payload);
                addImage(action.payload);
            }
        },
        removeImage(state, action) {
            const imageIndex = state.userImages.findIndex(image => image.id === action.payload.id);
            if (imageIndex !== -1) {
                state.userImages.splice(imageIndex, 1);
                state.images.splice(imageIndex, 1);
                removeFromLocalStorage(action.payload);
            }
        }
    },
});

export const { removeImage, addToUserImages, openImage, openNext, openPrev, closeImage, setUserImages, setApiImages, chooseUserImages, chooseApiImages } = imagesSlice.actions;

export default imagesSlice.reducer;