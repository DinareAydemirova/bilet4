import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist"))||[],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addTowishlist: (state, action) => {
     const elem=[...state.wishlist].find((elem)=>elem._id==action.payload._id)
     if(elem){
        elem.count++
     }else{
       state.wishlist=[...state.wishlist,{...action.payload, count:1}]
     }
     localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    },
   
    remoFromwishlist:(state, action)=>{
        state.wishlist=state.wishlist.filter((elem)=>elem._id!==action.payload._id)
     localStorage.setItem("wishlist", JSON.stringify(state.wishlist))

    },
    removeAllFromwishlist:(state, action)=>{
        state.wishlist=[]
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    

    }
   
  },
})

export const { addTowishlist, remoFromwishlist,removeAllFromwishlist } = wishlistSlice.actions

export default wishlistSlice.reducer