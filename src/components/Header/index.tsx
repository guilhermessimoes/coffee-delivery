import { Cart, CartCount, HeaderContainer, HeaderContent, Localization, NewCoffeCartHeaderButton, RightHeader } from "./styles";
import logoImg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { getTotal } from "../../features/cartSlice";

export function Header(){
  const dispatch =  useDispatch()
  const cart = useSelector(state => state.cart)
  console.log(cart)
    
    useEffect(()=>{
      dispatch(getTotal())
    },[cart])

  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <RightHeader>
          <Localization><MapPin size={24} weight="fill" />Port Alegre, RS</Localization>
          <Cart>
            <NewCoffeCartHeaderButton>
            <NavLink to="/delivery" title="Histórico">              
              <ShoppingCart size={26}  color="#C47F17" weight="fill"/>
            </NavLink>            
            </NewCoffeCartHeaderButton>
            {cart.cartItems.length <= 0 ?'' : <CartCount>{cart.cartTotalQuantity}</CartCount>
            }            
          </Cart>
        </RightHeader>
      </HeaderContent>
    </HeaderContainer>
  )
}