import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100vw;
  overflow-y: scroll;
  flex: 1;
  transition: max-height 0.3s;
`;