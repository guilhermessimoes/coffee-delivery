import { BannerContainer, GridSpan, SpanBanner, BackGroundIconCart, BackGroundIconTimer, BackGroundIconPackage, BackGroundIconCoffee } from "./styles";
import bannerImg from '../../assets/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
  return(
    <BannerContainer>
      <SpanBanner>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        <GridSpan>
          <span><BackGroundIconCart><ShoppingCart size={24} weight="fill" color="white"/></BackGroundIconCart>Compra simples e segura</span>
          <span><BackGroundIconTimer><Timer size={24} weight="fill" color="white"/></BackGroundIconTimer>Embalagem mantém o café intacto</span>
          <span><BackGroundIconPackage><Package size={24} weight="fill" color="white"/></BackGroundIconPackage>Entrega rápida e rastreada</span>
          <span><BackGroundIconCoffee><Coffee size={24} weight="fill" color="white"/></BackGroundIconCoffee>O café chega fresquinho até você</span>
        </GridSpan>
      </SpanBanner>
        <img src={bannerImg} alt="" />
    </BannerContainer>
  )
}