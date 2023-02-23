import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { InputContainer } from "./styles";

export function InputRemoveDelivery() {
  const [addItemCart, setAddItemCart ] = useState(0)

  const handleClickRemoveItem = () => {
    if (addItemCart > 0) {
      setAddItemCart(addItemCart - 1 )      
    }
  }

  const handleClickPlus = () => {
    setAddItemCart(addItemCart + 1 )
  }

  return(
    <InputContainer>
      <Trash color="#8047F8" onClick={handleClickRemoveItem} size="16px"/>
      <span>REMOVER</span>
    </InputContainer>
  )
}