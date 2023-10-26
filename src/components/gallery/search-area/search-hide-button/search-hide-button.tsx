import styled from "styled-components";

export const SearchHideButton = styled.input`
  border: 1px solid #acacb0;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  font-size: 18px;
  margin-left: auto;
  margin-right: 10px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 10px;
  &:hover {
    background-color: #48484f;
    color: aliceblue;
  }
`;