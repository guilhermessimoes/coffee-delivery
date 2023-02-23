import styled from "styled-components";

export const BannerContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`

export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
`

export const CardContainer = styled.div`
  width: 780px;
  height: 591;
`

export const CardDelivery = styled.div`
  width: 780px;
  height: 372px;
  background-color: ${props => props.theme["base-card"]};
  padding: 3rem;
  border-radius: 8px;
  
  form{
    margin-top: 2rem;
  }

  span{
    margin-left: 1.8rem;
  }

  input{
    height: 42px;
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};
    border-color: ${props => props.theme["base-button"]};
    border-radius: 4px;   
    margin-bottom: 1rem;
    border-style: solid;
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



