import { Cart, CartCount, HeaderContainer, HeaderContent, Localization, NewCoffeCartHeaderButton, RightHeader } from "./styles";
import logoImg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export function Header(){
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
            <CartCount>2</CartCount>
          </Cart>
        </RightHeader>
      </HeaderContent>
    </HeaderContainer>
  )
}