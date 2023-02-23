import { CardContainer, CoffeeCard, NewCoffeCartButton, AddCard, Title, Sifrao, Price, Tags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { InputAdd } from "./InputAdd";
import { coffees } from "../../service/coffee"

export function Card(){
  const coffeData = coffees

  if (!coffeData || coffeData.length <=0) return

  return(
    <>
      <Title>Nossos cafés</Title>
      <CardContainer>
        {coffeData.map((item) => {
          return(
          <CoffeeCard key={item.id}>
            <img src={item.image} alt="" />
            <Tags>{item.label}</Tags>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
            <AddCard>
              <Sifrao>R$</Sifrao><Price> {item.price}</Price>
              <InputAdd />
              <NewCoffeCartButton>
                <ShoppingCart size={24}  color="#F3F2F2" weight="fill"/>
              </NewCoffeCartButton>
            </AddCard>
          </CoffeeCard>
          )
        })}
      </CardContainer>

    </>
  )
}