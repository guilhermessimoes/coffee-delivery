import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { InputContainer } from "./styles";

export function InputAddDelivery() {
  const [addItemCart, setAddItemCart ] = useState(0)

  const handleClickMinus = () => {
    if (addItemCart > 0) {
      setAddItemCart(addItemCart - 1 )      
    }
  }

  const handleClickPlus = () => {
    setAddItemCart(addItemCart + 1 )
  }

  return(
    <InputContainer>
      <Minus color="#8047F8" onClick={handleClickMinus} attributeType="button" style={{ cursor: "pointer" }}>-</Minus>
      <span>{addItemCart}</span>
      <Plus color="#8047F8" onClick={handleClickPlus} style={{ cursor: "pointer" }}>+</Plus>
    </InputContainer>
  )
}