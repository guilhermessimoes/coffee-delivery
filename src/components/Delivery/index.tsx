import { BannerContainer, CardDelivery, SelectCoffe, CardPayment, CardContainer, Title, SelectCoffeContainer, ButtonLayout, ButtonContainer, Product, Resum, ButtonConfirm, Detail, TotalDetail } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money } from "phosphor-react";
import coffeeTradicional from '../../../public/CoffeeDelivery/image.png'
import { InputAdd } from "../Card/InputAdd";
import { InputAddDelivery } from "./InputAddDelivery";
import { InputRemoveDelivery } from "./inputRemove";
import { NavLink } from "react-router-dom";

export function DeliveryCard() {
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
        <SelectCoffe>
          <Product>
           <img src={coffeeTradicional} alt="" />
           <Detail>
            <span>Expresso Tradicional</span>
            <div id="buttonsAddRemove">
              <InputAddDelivery />
              <InputRemoveDelivery />              
            </div>
           </Detail>
           <TotalDetail>R$ 9,90</TotalDetail>
          </Product>
          <Resum>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div id="totalContainer">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </Resum>
          <NavLink to="/delivery/confirm" title="Histórico">
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </NavLink>
        </SelectCoffe>
      </SelectCoffeContainer>
    </BannerContainer>
    </>
  )
}