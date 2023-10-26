import styled from "styled-components";

export const HeaderImageContainer = styled.div<{checked: boolean}>`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  &:hover{
    filter: invert(10%);
  }
  filter: ${({checked}) => checked? "invert(0%)" : "invert(30%)"};
`;