import styled from "styled-components";


export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 5rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 900;
  font-size: 32px;
`

export const CoffeeCard = styled.div`
  background-color: ${props => props.theme["base-card"]};
  width: 18rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;
  color: ${props => props.theme["base-label"]};
  align-items: center;
  text-align: center;
  display: grid;
  
  strong {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 20px;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
  }

  img{
    margin-top: -3rem;
    margin-left: 4rem;
  }
`

export const Tags = styled.span`
    font-size: 14px;
    font-weight: bold;
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    padding: 0.3rem;
    border-radius: 99px;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    width: 7rem;
    margin-left: 4.2rem;
`

export const NewCoffeCartButton = styled.button`
  height: 40px;
  border: 0;
  margin-left:10px;
  background-color: ${props => props.theme["purple-dark"]};
  padding: 0 0.80rem;
  border-radius: 6px;
  cursor: pointer;    
`

export const AddCard = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  input {
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-title"]};
  }
`

export const Price = styled.span`
  color: ${props => props.theme["base-text"]};
  font-size: 26px;
  font-weight: bold;
  font-family: 'Baloo 2', cursive;
  margin-right: -35px;
`

export const Sifrao = styled.span`
  font-size: 12px;
  font-size: 300;
  font-family: 'Roboto';  
`


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