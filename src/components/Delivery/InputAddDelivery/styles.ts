import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${props => props.theme["base-button"]};
  border-radius: 8px;
  width: 72px;
  height: 32px;
  display: flex;
  justify-content: space-around;
  margin-left: 70px;
  align-items: center;

  span {
    color: ${props => props.theme["base-title"]};
    font-size: 16px;
    cursor: none;
  }
`