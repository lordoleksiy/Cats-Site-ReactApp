import {SearchArea} from "./search-area/search-area.tsx";
import {GalleryContainer} from "./gallery-container/gallery-container.tsx";
import {GalleryItem} from "./gallery-item/gallery-item.tsx";
import {GalleryPage} from "./gallery-page/gallery-page.tsx";
import {GalleryModal} from "./gallery-modal/gallery-modal.tsx";
import {LoadImagesEnum} from "../../models/enums/load-images-enum.ts";
import {useDispatch, useSelector} from "react-redux";
import {chooseApiImages, chooseUserImages, setApiImages, setUserImages} from "../../slices/images-slice.ts";
import {ImageDTO} from "../../models/imageDTO.ts";
import React, {useEffect, useState} from "react";
import {fetchImages} from "../../services/query-service.ts";
import {getMyImages} from "../../services/localstorage-service.ts";
import {RootState} from "../../store.ts";


export function Gallery(){
    const [searchType, setSearchType] = useState(LoadImagesEnum.Users);
    const [page, setPage] = useState(1);
    const imagesPerPage = 30;
    const [loading, setLoading] = useState(false);
    const images = useSelector((state: RootState) => state.images.images);
    const apiImages = useSelector((state: RootState) => state.images.apiImages);
    const userImages = useSelector((state: RootState) => state.images.userImages);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchType === LoadImagesEnum.Users) {
            if (!userImages.length) {
                dispatch(setUserImages(getMyImages()));
            }
            dispatch(chooseUserImages());
        } else if (searchType === LoadImagesEnum.Api && !apiImages.length) {
            fetchImages(20, 1).then(data => {
                dispatch(setApiImages(data));
                dispatch(chooseApiImages());
            });
        } else {
            dispatch(chooseApiImages());
        }

    }, [searchType]);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        if (searchType !== LoadImagesEnum.Api || loading) return;
        const container = e.target as HTMLElement;
        if (container.clientHeight + container.scrollTop >= container.scrollHeight-700 && !loading) {
            setLoading(true);
            fetchImages(imagesPerPage, page+1).then((data) =>{
                dispatch(setApiImages([...apiImages, ...data]));
                dispatch(chooseApiImages());
                setPage(page + 1);
                setLoading(false);
            });
        }
    };

    return (
        <GalleryPage>
            <SearchArea searchType={searchType} setSearchType={setSearchType}/>
                <GalleryContainer onScroll={handleScroll}>
                    {images && images.length > 0 ? (
                        images.map((image: ImageDTO, index: number) => (
                            <GalleryItem key={`${image.id}_${index}`} image={image} canBeDeleted={searchType === LoadImagesEnum.Users}/>
                        ))
                    ) : (
                        <p>No images available.</p>
                    )}
                </GalleryContainer>
            <GalleryModal/>
        </GalleryPage>

    );
}