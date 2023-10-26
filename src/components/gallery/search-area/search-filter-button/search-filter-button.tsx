import styled from "styled-components";

export const SearchFilterButton = styled.button<{chosen: boolean}>`
  background-color: ${({chosen}) => chosen? "#4a4a54" : "#acacb0"};
  color: ${({chosen}) => chosen? "aliceblue" : "black"};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  min-width: 50px;
  &:hover {
    background-color: #48484f;
    color: aliceblue;
  }
`;