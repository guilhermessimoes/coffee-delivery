import styled from "styled-components";

export const InputContainer = styled.button`
  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
  width: 91px;
  height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  cursor: pointer;

  span {
    color: ${props => props.theme["base-text"]};
    font-size: 12px;
  }
`