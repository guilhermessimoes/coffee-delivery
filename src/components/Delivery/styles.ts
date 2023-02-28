import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const BannerContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  form{
    display: flex;
    gap: 2rem;
  }
`

export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
`

export const CardContainer = styled.div`
  height: 591px;
`

export const CardDelivery = styled.div`
  min-width: 780px;
  min-height: 372px;
  background-color: ${props => props.theme["base-card"]};
  padding: 3rem;
  border-radius: 8px;
  


  span{
    margin-left: 1.8rem;
    padding: 0;
    margin: 0;
  }

  div{    
    margin-bottom: 1rem;
  }

  input{
    height: 42px;
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};
    border-color: ${props => props.theme["base-button"]};
    border-radius: 4px;   
    border-style: solid;
  }

  p{
    color: red;
    font-size: 12px;
  }

  #cep {
    width: 200px;
  }

  #rua {
    width: 560px;
  }

  #numero{
    width: 200px;
    margin-right: 0.8rem;
  }

  #complemento{
    width: 348px;
  }

  #bairro{
    width: 200px;
    margin-right: 0.8rem;
  }

  #cidade{
    width: 276px;
    margin-right: 0.8rem;
  }

  #uf{
    width: 60px;
  }
`

export const CardPayment = styled.div`
  width: 780px;
  height: 207px;
  background-color: ${props => props.theme["base-card"]};
  margin-top: 10px;
  display: grid;
  justify-content: center;
  border-radius: 8px;

  #payment{
    display: flex;
    align-items: center;
    align-content: center;
    margin-top: 2rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  #textPayment{
    margin-top: -1.5rem;
    margin-left: 1.2rem;
    font-size: 14px;
  }
  
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

`
export const SelectCoffeContainer = styled.section`
  margin: 0 auto;
`

export const SelectCoffe = styled.div`
  width: 448px;
  height: 498px;
  background-color: ${props => props.theme["base-card"]};
  border-radius:6px 44px 6px 44px;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

export const Product = styled.div`
  display: flex;
  width: 23rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;

  img{
    width: 4rem;
    height: 4rem;
  }

  
`

export const TotalDetail = styled.span`
  color: ${props => props.theme["base-text"]} !important;
`

export const Resum = styled.div`
  display: grid;
  gap: 1rem;

  div{
    display: flex;
    justify-content: space-between;
  }

  div span {
    font-size: 16px;
    color: ${props => props.theme["base-text"]};
  }

  #totalContainer span{
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme["base-subtitle"]};
  }

`

export const ButtonConfirm = styled.button`
  width: 23rem;
  height: 2.875rem;
  background-color: ${props => props.theme["yellow"]};
  border: none;
  color: ${props => props.theme["white"]};
  border-radius: 6px;
  cursor: pointer;
`

export const Detail = styled.div`
  display: grid;
  width: 220px;

  #buttonsAddRemove{
    display: flex;
    justify-content: flex-start;
    margin-left: -4.5rem;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`

export const InputContainerRemove = styled.button`
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

export const InputContainerAdd = styled.div`
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

export const ButtonLayout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 51px;
  background-color: ${props => props.theme["base-button"]};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  color: ${props => props.theme["base-text"]};
  cursor: pointer;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  display: none;
  &:checked + ${ButtonLayout} {
      &::after {
        color: ${props => props.theme["purple-dark"]};
        background-color: ${props => props.theme["purple-light"]};
      }
  }
`;

export const ButtonLayoutConfirmed = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 51px;
  background-color: ${props => props.theme["purple-light"]};
  border: 1px solid  ${props => props.theme["purple-dark"]};
  border-radius: 4px;
  font-size: 12px;
  color: ${props => props.theme["base-text"]};
  cursor: pointer;
`

export const Trees = styled.div`
  display: flex;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

interface CartTypeButtonProps {
  variant: 'credito' | 'debito' | 'dinheiro';
}

export const CartTypeButton = styled(RadioGroup.Item)<CartTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 178px;
  height: 51px;
  background-color: ${props => props.theme["base-button"]};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  color: ${props => props.theme["base-text"]};
  cursor: pointer;
  svg {
    margin-right: 10px;
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme["base-hover"]};
  }
  &[data-state='checked'] {
    background-color: ${props => props.theme["purple-light"]};
    border: 1px solid  ${props => props.theme["purple-dark"]};
  }
`;    

