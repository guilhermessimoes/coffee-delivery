import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartPayment: '',
  enderecoCart: {}
}

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decreseadCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info(`${action.payload.title} foi reduzido do carrinho.`, {
          position: "top-right",          
        });        
      }else if(state.cartItems[itemIndex].cartQuantity === 1){
        const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        state.cartItems = nextCartItems
        toast.success(`${action.payload.title} removido com sucesso.`, {
          position: "top-right",          
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.info(`quantidade do ${state.cartItems[itemIndex].title} atualizada`, {
          position: "top-right",          
        });
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.title} adicionado com sucesso.`, {
          position: "top-right",          
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
      state.cartItems = nextCartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} removido com sucesso.`, {
        position: "top-right",          
      });
    },
    getTotal(state) {
      let { total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{
       const { price, cartQuantity} = cartItem
       const itemTotal = price * cartQuantity

       cartTotal.total += itemTotal
       cartTotal.quantity += cartQuantity

       return cartTotal
      }, {
        total: 0,
        quantity: 0
      })

      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    setNamePayment(state, action) {
      state.cartPayment = action.payload
    },
    setEnderecoCart(state, action){
      state.enderecoCart = action.payload
    }
    
  }
})

export const { decreseadCart, addToCart, removeFromCart, getTotal, setNamePayment, setEnderecoCart } = cartSlice.actions

export default cartSlice.reducer