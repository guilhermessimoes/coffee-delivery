import { Minus, Plus } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../features/counterSilece";
import { RootState } from "../../../store";
import { InputContainer } from "./styles";

export function InputAdd() {  
  const dispatch =  useDispatch()
  const { count }  = useSelector((state: RootState) => state.counter)


  return(
    <InputContainer>
      <Minus color="#8047F8" onClick={() => dispatch(decrement())} attributeType="button" style={{ cursor: "pointer" }}>-</Minus>
      <span>{count}</span>
      <Plus color="#8047F8" onClick={() => dispatch(increment())} style={{ cursor: "pointer" }}>+</Plus>
    </InputContainer>
  )
}