import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`

export const Localization = styled.span`
  color: ${props => props.theme["purple-dark"]};
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 6px;
  display: flex;
  height: 40px;
  min-width: 140px;
  width: relative;
  background-color: ${props => props.theme["purple-light"]};
  align-items: center;
  justify-content: space-between;

`

export const Cart = styled.div`

`
export const NewCoffeCartHeaderButton = styled.button`
  height: 40px;
  border: 0;
  margin-left:10px;
  background-color: ${props => props.theme["yellow-light"]};
  padding: 0 0.80rem;
  border-radius: 6px;
  cursor: pointer;    
`

export const CartCount = styled.span `
  font-size: 0.875rem;
  font-weight: 800;
  border-radius: 50%;
  position: relative;
  background-color: ${props => props.theme["yellow-dark"]};
  color: ${props => props.theme["white"]};
  
  padding: 4px 8px;
  top: -30px;
  margin-left: -12px;
 
`
