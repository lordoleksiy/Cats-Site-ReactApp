import { useDispatch, useSelector } from "react-redux";
import { closeImage, openNext, openPrev } from "../../../slices/images-slice.ts";
import {GalleryModalPanel} from "./gallery-modal-panel/gallery-modal-panel.tsx";
import {GalleryModalClose} from "./gallery-modal-close/gallery-modal-close.tsx";
import {GalleryModalButton} from "./gallery-modal-button/gallery-modal-button.tsx";
import {GalleryModalImage} from "./gallery-modal-image/gallery-modal-image.tsx";
import {RootState} from "../../../store.ts";

export const GalleryModal = function () {
    const dispatch = useDispatch();
    const curImage = useSelector((state: RootState) => state.images.currentImage);
    return (
        <GalleryModalPanel visible={curImage.url != null && curImage.url != "" }>
            <GalleryModalClose onClick={() => dispatch(closeImage())}>&times;</GalleryModalClose>
            <GalleryModalButton onClick={() => dispatch(openPrev())}>&#9664;</GalleryModalButton>
            <GalleryModalImage src={curImage.url} />
            <GalleryModalButton onClick={() => dispatch(openNext())}>&#9654;</GalleryModalButton>
        </GalleryModalPanel>
    );
};
