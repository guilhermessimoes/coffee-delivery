import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${props => props.theme["base-button"]};
  padding: 12px;
  border-radius: 8px;
  width: 72px;
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  align-items: center;

  span {
    color: ${props => props.theme["base-title"]};
    font-size: 16px;
    cursor: none;
  }
`