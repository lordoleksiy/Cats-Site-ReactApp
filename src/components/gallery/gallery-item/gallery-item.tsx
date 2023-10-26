import {GalleryItemActionBar} from "./gallery-item-action-bar/gallery-item-action-bar.tsx";
import {GalleryItemImage} from "./gallery-item-image/gallery-item-image.tsx";
import {
    GalleryItemLikeButton,
    GalleryItemRepostButton,
    GalleryItemViewImageButton
} from "./gallery-item-buttons/gallery-item-buttons.tsx";
import {GalleryItemWrapper} from "./gallery-item-wrapper/gallery-item-wrapper.tsx";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {addToUserImages, openImage, removeImage} from "../../../slices/images-slice.ts";
import {isLiked} from "../../../services/localstorage-service.ts";
import {ImageDTO} from "../../../models/imageDTO.ts";
interface GalleryItemProps {
    image: ImageDTO;
    canBeDeleted: boolean;
}

export const GalleryItem: FC<GalleryItemProps> = ({ image, canBeDeleted }) => {
    const dispatch = useDispatch();
    return(
        <GalleryItemWrapper id="galleryItemWrapper">
            <GalleryItemImage src={image.url} alt="cute citten"/>
            <GalleryItemActionBar>
                <GalleryItemLikeButton liked={isLiked(image)} onClick={() => dispatch(addToUserImages(image))}/>
                <GalleryItemRepostButton disabled={!canBeDeleted} onClick={() => dispatch(removeImage(image))}><i className="fa-solid fa-trash"></i></GalleryItemRepostButton>
                <GalleryItemViewImageButton onClick={ () => dispatch(openImage(image)) }/>
            </GalleryItemActionBar>
        </GalleryItemWrapper>
    );
}