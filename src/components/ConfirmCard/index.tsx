import { BannerContainer, CardConfirm, IconButtonDollar, IconButtonMap, IconButtonTimer, SubTitleResum, TextContainer, TitleResum } from "./styles";
import Illustration from '../../assets/Illustration.svg';
import { CurrencyDollar, IconContext, MapPin, Timer } from "phosphor-react";
import { useSelector } from "react-redux";

export function ConfirmCard() {
  const cartEndereco = useSelector(state => state.cart.enderecoCart)
  
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
              <span>  {`Entrega em ${cartEndereco.rua}, ${cartEndereco.numero} ${cartEndereco.bairro} - ${cartEndereco.cidade}, ${cartEndereco.uf}`}</span>            
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
              <span>{cartEndereco.type}</span>
            </div>
          </div>
        </TextContainer>
      </CardConfirm>
      <img src={Illustration} alt="" />      
    </BannerContainer>
    </>
  )
}