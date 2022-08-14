import styled from "styled-components";

export const TestContainer = styled.div`

`
export const TestNumberBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  width: 60vw;
`
export const TestNumberBox = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(217, 217, 217);
  }
`;