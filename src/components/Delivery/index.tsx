import { BannerContainer, CardDelivery, SelectCoffe, CardPayment, CardContainer, Title, SelectCoffeContainer, ButtonLayout, ButtonContainer, Product, Resum, ButtonConfirm, Detail, TotalDetail, InputContainerRemove, InputContainerAdd, Input, Label, ButtonLayoutConfirmed, Trees, TransactionType, CartTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Minus, Money, Plus, RadioButton, Trash } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreseadCart, getTotal, removeFromCart, setEnderecoCart, setNamePayment } from "../../features/cartSlice";
import { useEffect, useState } from "react";
import { getCep } from "../../service/cep";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface ICartItem {
  cartItems: [],
  cartTotalAmount: number,
  cartTotalQuantity: number
}

interface IItem {
    cartQuantity: number,
    description: string,
    id: number,
    image: string,
    label: string,
    price: number,
    title: string,
    cartItems: [],
    cartTotalAmount: number,
    cartTotalQuantity: number
}

interface IFormInput {
  cep: string,
  rua: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string
}

const schema = yup.object({
  cep: yup.string().required("O cep é obrigatório").min(8).max(8),
  rua: yup.string().required("A rua é obrigatório"),
  numero: yup.string().required("O numero é obrigatório."),
  complemento: yup.string(),
  bairro: yup.string().required("O bairro é obrigatório."),
  cidade: yup.string().required("A cidade é obrigatório."),
  uf: yup.string().required("UF é obrigatório."),
  type: yup.string().oneOf(Object.values(['Cartão de crédito', 'Cartão de débito', 'dinheiro'])),
}).required();

export function DeliveryCard() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { setValue, register, handleSubmit,control, formState:{ errors }} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: 'Cartão de crédito'
    }
  }) 
  const navigate = useNavigate();
  
 
  useEffect(()=>{
    dispatch(getTotal())
  },[cart, dispatch])  

  const handleRemoveFromCart = (cartItem: ICartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreasedFromCart = (cartItem: ICartItem) => {
    dispatch(decreseadCart(cartItem))
  }

  const handleIncreasedFromCart = (cartItem: ICartItem) => {
    dispatch(addToCart(cartItem))
  }

  const totalWithTax = cart.cartTotalAmount + 3.5

  const totalWithTaxFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalWithTax);


  const handleCheckCep = async (event) => {
    const cepFormat = event.target.value.replace(/\D/g, '')
    if (cepFormat.length === 8) {
      const cep = await getCep(cepFormat)
      setValue('rua', cep.data.logradouro)
      setValue('bairro', cep.data.bairro)
      setValue('cidade', cep.data.localidade)
      setValue('uf', cep.data.uf)      
    }    
  }

  const handleCreateNewCart = (data: any) => {
    dispatch(setEnderecoCart(data))
    navigate("/delivery/confirm");
  }
 
  return(
    <>    
    <BannerContainer>
    <form onSubmit={handleSubmit(handleCreateNewCart)}>
      <CardContainer>
        <Title>Complete seu pedido</Title>
        <CardDelivery>
          <h2> <MapPinLine size={22} color="#C47F17"/> Endereço de Entrega</h2>
          <span>Informe o endereço onde deseja receber seu pedido</span><br/><br/>
            <div>
              <input type="text" id="cep" {...register('cep', { required: true, maxLength: 8, minLength: 8 })} placeholder=" CEP" onChange={handleCheckCep}/>
              <p className="error-message">{errors.cep?.message}</p>
            </div>
            <div>
              <input type="text" id="rua" {...register('rua', { required: true, minLength: 2})} placeholder=" Rua"/>
              <p className="error-message">{errors.rua?.message}</p>
            </div>
            <Trees>
              <div>
                <input type="text" id="numero" {...register('numero', {required: true, minLength: 2})} placeholder=" Número"/>
                <p className="error-message">{errors.numero?.message}</p>
              </div>
              <div>
                <input type="text" id="complemento" {...register('complemento')} placeholder=" Complemento"/>
                <p className="error-message">{errors.complemento?.message}</p>
              </div>
            </Trees>
            <Trees>
              <div>
                <input type="text" id="bairro" {...register('bairro', {required: true, minLength: 2})} placeholder=" Bairro"/>
                <p className="error-message">{errors.bairro?.message}</p>
              </div>
              <div>
                <input type="text" id="cidade" {...register('cidade', {required: true, minLength: 2})} placeholder=" Cidade"/>
                <p className="error-message">{errors.cidade?.message}</p>
              </div>
              <div>
                <input type="text" id="uf" {...register('uf', {required: true, minLength: 2})} placeholder=" UF"/>
                <p className="error-message">{errors.uf?.message}</p>
              </div>
            </Trees>
            
        </CardDelivery>
        <CardPayment>
          <span id="payment"><CurrencyDollar size={22} color="#8047F8"/> Pagamento</span><br />
          <span id="textPayment">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span><br />   

          <Controller control={control} name="type" render={({ field }, ) =>{
            return(
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <CartTypeButton variant="credito" value="Cartão de crédito" {...register('type', {required: true})}>
                  <CreditCard size={22} color="#8047F8"/>
                  Cartão de Credito
                </CartTypeButton>
                <CartTypeButton variant="debito" value="Cartão de débito" {...register('type', {required: true})}>
                  <CreditCard size={22} color="#8047F8"/>
                  Cartão de Debito
                </CartTypeButton>
                <CartTypeButton variant="dinheiro" value="dinheiro" {...register('type', {required: true})}>
                  <Money size={22} color="#8047F8"/>
                  Dinheiro
                </CartTypeButton>
              </TransactionType>
            )
          }} />
        </CardPayment>
      </CardContainer>
      <SelectCoffeContainer>
        <Title>Cafés Selecionados</Title>
        {cart.cartItems.length > 0 ?
          <SelectCoffe>
          {cart.cartItems?.map((item: IItem) => {
            return(
            <Product key={item.id}>
              <img src={item.image} alt="" />
              <Detail>
              <span>{item.title}</span>
              <div id="buttonsAddRemove">
                <InputContainerAdd>
                    <Minus color="#8047F8" attributeType="button" style={{ cursor: "pointer" }} onClick={() => handleDecreasedFromCart(item)}>-</Minus>
                    <span>{item.cartQuantity}</span>
                    <Plus color="#8047F8" style={{ cursor: "pointer" }} onClick={() => handleIncreasedFromCart(item)}>+</Plus>
                </InputContainerAdd>
                <InputContainerRemove onClick={() => handleRemoveFromCart(item)}>
                    <Trash color="#8047F8" size="16px"/>
                    <span>REMOVER</span>
                </InputContainerRemove>             
              </div>
              </Detail>
              <TotalDetail>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.cartQuantity * item.price)}</TotalDetail>
            </Product>
            )
          })}          
          <Resum>
            <div>
              <span>Total de itens</span>
              <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cart.cartTotalAmount)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div id="totalContainer">
              <span>Total</span>
              <span>{totalWithTaxFormat}</span>
            </div>
          </Resum>
          <ButtonConfirm type="submit">CONFIRMAR PEDIDO</ButtonConfirm>
        </SelectCoffe>
        : <p>Nenhum item selecionado.</p>}        
      </SelectCoffeContainer>
    </form>
    </BannerContainer>
    </>
  )
}