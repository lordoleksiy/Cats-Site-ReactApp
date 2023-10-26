import {SearchSectionDiv} from "./search-section-div/search-section-div.tsx";
import {SearchInput} from "./search-input/search-input.tsx";
import {SearchHideButton} from "./search-hide-button/search-hide-button.tsx";
import {FC} from "react";
import {SearchFilterButton} from "./search-filter-button/search-filter-button.tsx";
import {LoadImagesEnum} from "../../../models/enums/load-images-enum.ts";
import {useDispatch, useSelector} from "react-redux";
import {changeState} from "../../../slices/search-area-slice.ts";
import {SearchAreaModel} from "../../../models/search-area-model.ts";
import {RootState} from "../../../store.ts";

export const SearchArea: FC<SearchAreaModel> = function ({searchType, setSearchType}){
    const visible = useSelector((state: RootState) => state.searchArea.visible );
    const dispatch = useDispatch();

    const handleSearchTypeChange = (type: LoadImagesEnum) => {
        if (searchType !== type){
            setSearchType(type);
        }
    };
    return(
        <SearchSectionDiv visible = {visible}>
            <p>Search by:</p>
            <SearchInput placeholder="Now it doesn't work, because we don't have backend..."/>
            <div style={{display: "flex", marginLeft:"10px"}}>
                <SearchFilterButton
                    chosen={searchType === LoadImagesEnum.Api}
                    onClick={() => handleSearchTypeChange(LoadImagesEnum.Api)}>
                    api
                </SearchFilterButton>
                <SearchFilterButton
                    chosen={searchType === LoadImagesEnum.Users}
                    onClick={() => handleSearchTypeChange(LoadImagesEnum.Users)}>
                    liked cats
                </SearchFilterButton>
            </div>
            <SearchHideButton type="button" value="⭡" onClick={() => dispatch(changeState())}/>
        </SearchSectionDiv>
    );
}