import styled from "styled-components";

export const GalleryModalPanel = styled.div<{visible: boolean}>`
  display: ${({visible}) => visible? "flex" : "none"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;