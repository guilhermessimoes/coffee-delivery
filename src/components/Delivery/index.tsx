import { BannerContainer, CardDelivery, SelectCoffe, CardPayment, CardContainer, Title, SelectCoffeContainer, ButtonLayout, ButtonContainer, Product, Resum, ButtonConfirm, Detail, TotalDetail, InputContainerRemove, InputContainerAdd } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreseadCart, getTotal, removeFromCart } from "../../features/cartSlice";
import { useEffect } from "react";


interface ICartItem {
  cartItems: [],
  cartTotalAmount: number,
  cartTotalQuantity: number
}

interface IItem {
    cartQuantity: number,
    description: string,
    id: number,
    image: string,
    label: string,
    price: number,
    title: string,
    cartItems: [],
    cartTotalAmount: number,
    cartTotalQuantity: number
}

export function DeliveryCard() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[cart, dispatch])

  const handleRemoveFromCart = (cartItem: ICartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreasedFromCart = (cartItem: ICartItem) => {
    dispatch(decreseadCart(cartItem))
  }

  const handleIncreasedFromCart = (cartItem: ICartItem) => {
    console.log("🚀 ~ file: index.tsx:30 ~ handleIncreasedFromCart ~ cartItem:", cartItem)
    dispatch(addToCart(cartItem))
  }

  const totalWithTax = cart.cartTotalAmount + 3.5

  const totalWithTaxFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalWithTax);
 
  return(
    <>    
    <BannerContainer>
      <CardContainer>
        <Title>Complete seu pedido</Title>
        <CardDelivery>
          <h2> <MapPinLine size={22} color="#C47F17"/> Endereço de Entrega</h2>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form action="">
            <input type="text" name="" id="cep"  placeholder=" CEP"/> <br />
            <input type="text" name="" id="rua" placeholder=" Rua"/><br />
            <input type="text" name="" id="numero" placeholder=" Número"/>
            <input type="text" name="" id="complemento" placeholder=" Complemento"/><br />
            <input type="text" name="" id="bairro" placeholder=" Bairro"/>
            <input type="text" name="" id="cidade" placeholder=" Cidade"/>
            <input type="text" name="" id="uf" placeholder=" UF"/>
          </form>
        </CardDelivery>
        <CardPayment>
          <span id="payment"><CurrencyDollar size={22} color="#8047F8"/> Pagamento</span><br />
          <span id="textPayment">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span><br />
          <ButtonContainer>
            <ButtonLayout><CreditCard size={22} color="#8047F8"/> CARTÃO DE CREDITO</ButtonLayout>
            <ButtonLayout><Bank size={22} color="#8047F8"/> CARTÃO DE DÉBITO</ButtonLayout>
            <ButtonLayout><Money size={22} color="#8047F8"/> DINHEIRO</ButtonLayout>
          </ButtonContainer>
        </CardPayment>
      </CardContainer>
      <SelectCoffeContainer>
        <Title>Cafés Selecionados</Title>
        {cart.cartItems.length > 0 ?
          <SelectCoffe>
          {cart.cartItems?.map((item: IItem) => {
            return(
            <Product key={item.id}>
              <img src={item.image} alt="" />
              <Detail>
              <span>{item.title}</span>
              <div id="buttonsAddRemove">
                <InputContainerAdd>
                    <Minus color="#8047F8" attributeType="button" style={{ cursor: "pointer" }} onClick={() => handleDecreasedFromCart(item)}>-</Minus>
                    <span>{item.cartQuantity}</span>
                    <Plus color="#8047F8" style={{ cursor: "pointer" }} onClick={() => handleIncreasedFromCart(item)}>+</Plus>
                </InputContainerAdd>
                <InputContainerRemove onClick={() => handleRemoveFromCart(item)}>
                    <Trash color="#8047F8" size="16px"/>
                    <span>REMOVER</span>
                </InputContainerRemove>             
              </div>
              </Detail>
              <TotalDetail>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.cartQuantity * item.price)}</TotalDetail>
            </Product>
            )
          })}          
          <Resum>
            <div>
              <span>Total de itens</span>
              <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cart.cartTotalAmount)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div id="totalContainer">
              <span>Total</span>
              <span>{totalWithTaxFormat}</span>
            </div>
          </Resum>
          <NavLink to="/delivery/confirm" title="Histórico">
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </NavLink>
        </SelectCoffe>
        : <p>Nenhum item selecionado.</p>}
        
      </SelectCoffeContainer>
    </BannerContainer>
    </>
  )
}