import {ImageDTO} from "../models/imageDTO.ts";

const localStoragePath = "my-cats-images";

export function getMyImages() {
    const storedImages = localStorage.getItem(localStoragePath);
    return storedImages ? JSON.parse(storedImages) : [];
}

export function addImage(newImage: ImageDTO) {
    const storedImages = getMyImages() as ImageDTO[];
    const existingImage = storedImages.find(image => image.id === newImage.id);
    if (!existingImage) {
        storedImages.push(newImage);
        updateStoredImages(storedImages);
    }
}

export function removeFromLocalStorage(imageToRemove: ImageDTO){
    const storedImages = getMyImages() as ImageDTO[];
    const imageIndex = storedImages.findIndex(image => image.id === imageToRemove.id);
    if (imageIndex !== -1) {
        storedImages.splice(imageIndex, 1);
        updateStoredImages(storedImages);
    }
}

export function isLiked(image: ImageDTO){
    const storedImages = getMyImages() as ImageDTO[];
    return storedImages.find(img => img.id === image.id) != null;
}

function updateStoredImages(images: ImageDTO[]) {
    localStorage.setItem(localStoragePath, JSON.stringify(images));
}
