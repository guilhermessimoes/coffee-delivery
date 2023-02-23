import { BannerContainer, CardConfirm, IconButtonDollar, IconButtonMap, IconButtonTimer, SubTitleResum, TextContainer, TitleResum } from "./styles";
import Illustration from '../../assets/Illustration.svg';
import { CurrencyDollar, IconContext, MapPin, Timer } from "phosphor-react";

export function ConfirmCard() {
  return(
    <>
    <TitleResum>Uhu! Pedido confirmado</TitleResum>
    <SubTitleResum>Agora é só aguardar que logo o café chegará até você</SubTitleResum>
    <BannerContainer>
      <CardConfirm>
        <TextContainer>
          <div>
            <IconButtonMap>
              <MapPin size={18} color="white" weight="fill"/>
            </IconButtonMap>
            <div id="sectionResum">
              <span>  Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</span>            
            </div>
          </div>          
          <div>
            <IconButtonTimer>
              <Timer size={18} color="white" weight="fill"/>
            </IconButtonTimer>
            <div id="sectionResum">
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div>
            <IconButtonDollar>
              <CurrencyDollar size={18} color="white" weight="fill"/>
            </IconButtonDollar>
            <div id="sectionResum">
              <span>Pagamento na entrega</span>
              <span>Cartão de Credito</span>
            </div>
          </div>
        </TextContainer>
      </CardConfirm>
      <img src={Illustration} alt="" />      
    </BannerContainer>
    </>
  )
}