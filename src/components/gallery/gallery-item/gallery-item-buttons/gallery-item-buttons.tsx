import styled from "styled-components";

const SharedButtonStyles = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 7px;
    &:hover{
      background-color: #48484f;
      color: aliceblue;
    }
`;

export const GalleryItemLikeButton = styled(SharedButtonStyles)<{liked: boolean}>`
    color: ${({liked}) => liked? "red" : "black"};
    &:before {
      content: "❤";
    }
`;

export const GalleryItemRepostButton = styled(SharedButtonStyles)`
    &:before{
      content: "🗑️";
    }
`;

export const GalleryItemViewImageButton = styled(SharedButtonStyles)`
    &:before {
      content: "⤡";
    }
`;