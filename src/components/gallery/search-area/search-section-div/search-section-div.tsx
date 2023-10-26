import styled from "styled-components";

export const SearchSectionDiv = styled.div<{visible: boolean}>`
  background-color: #f0f0f0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  display: flex;
  max-height: ${({visible}) => visible? "6vh" : "0px"};
  padding: ${({visible}) => visible? "10px 10px" : "0px 10px"};
  border: ${({visible}) => visible? "1px solid #ccc;" : "0px"};
  justify-content: center;
  align-items: center;
`;