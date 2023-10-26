import {LoadImagesEnum} from "./enums/load-images-enum.ts";
import React from "react";

export interface SearchAreaModel{
    searchType: LoadImagesEnum,
    setSearchType: React.Dispatch<React.SetStateAction<LoadImagesEnum>>
}