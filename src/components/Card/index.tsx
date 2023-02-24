import { CardContainer, CoffeeCard, NewCoffeCartButton, AddCard, Title, Sifrao, Price, Tags, InputContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { InputAdd } from "./InputAdd";
import { coffees } from "../../service/coffee"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addToCart, decreseadCart, getTotal } from "../../features/cartSlice";
import { useEffect } from "react";

interface IProcuct {
    id: number;
    image: string;
    label: string;
    title: string;
    description: string;
    price: number;
}


export function Card(){
  const dispatch =  useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(()=>{
    dispatch(getTotal())
  },[cart, dispatch])

  const coffeData = coffees
  if (!coffeData || coffeData.length <= 0) return


  const handleDecreasedFromCart = (product: IProcuct) => {
    dispatch(decreseadCart(product))
  }

  const handleAddToCart = (product: IProcuct) => {
    dispatch(addToCart(product))
  }

  return(
    <>
      <Title>Nossos cafés</Title>
      <CardContainer>
        {coffeData.map((product) => {
          return(
          <CoffeeCard key={product.id}>
            <img src={product.image} alt="" />
            <Tags>{product.label}</Tags>
            <strong>{product.title}</strong>
            <span>{product.description}</span>
            <AddCard>
              <Sifrao>R$</Sifrao><Price> {new Intl.NumberFormat("pt-BR", {maximumSignificantDigits: 2 }).format(product.price)}</Price>
              <InputContainer>
                <Minus color="#8047F8" attributeType="button" style={{ cursor: "pointer" }} onClick={() =>  handleDecreasedFromCart(product)}>-</Minus>
                  <span>{cart.cartTotalQuantity}</span>
                <Plus color="#8047F8"  style={{ cursor: "pointer" }} onClick={() =>  handleAddToCart(product)}>+</Plus>
              </InputContainer>
              <NewCoffeCartButton>
                <ShoppingCart size={24}  color="#F3F2F2" weight="fill" onClick={() => handleAddToCart(product)}/>
              </NewCoffeCartButton>
            </AddCard>
          </CoffeeCard>
          )
        })}
      </CardContainer>

    </>
  )
}