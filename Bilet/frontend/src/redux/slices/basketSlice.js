import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket"))||[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
     const elem=[...state.basket].find((elem)=>elem._id==action.payload._id)
     if(elem){
        elem.count++
     }else{
       state.basket=[...state.basket,{...action.payload, count:1}]
     }
     localStorage.setItem("basket", JSON.stringify(state.basket))
    },
    increment:(state, action)=>{
        const elem=[...state.basket].find((elem)=>elem._id==action.payload._id)
        elem.count++
     localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    decrement:(state, action)=>{
        const elem=[...state.basket].find((elem)=>elem._id==action.payload._id)
        elem.count--
        if(elem.count<=0){
            state.basket=state.basket.filter((elem)=>elem._id!==action.payload._id)
        }
     localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    remoFromBaket:(state, action)=>{
        state.basket=state.basket.filter((elem)=>elem._id!==action.payload._id)
     localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    removeAllFromBaket:(state, action)=>{
        state.basket=[]
        localStorage.setItem("basket", JSON.stringify(state.basket))
    

    }
   
  },
})

export const { addToBasket, increment, decrement,remoFromBaket, removeAllFromBaket } = basketSlice.actions

export default basketSlice.reducer