import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[]
}


export const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers: {
        addToCart: (state, action) => {
           const itemExist = state.items.find((item)=>item.id === action.payload)
           if (itemExist) {
                itemExist.count
           } else {
              state.items.push({...action.payload, count: 1})
           }
            
          },
        increment : (state, action) =>{
             state.items = state.items.map((item)=> {
                    
                      if (item.id === action.payload) {
                        item.count++
                    } 
                      return item
                    
             })
        },

        decrement : (state, action) => {
          state.items = state.items.map((item)=> {
                    
            if (item.id=== action.payload) {
              item.count--
          } 
            return item
          
   })
    .filter((item) => item.count !== 0)
        },
      removeFromCart: (state, action) => {
           
        state.items = state.items.filter((item) => item.id !== action.payload.id)
          },
    }
})
export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export const selectItems = (state) => state.items;
export default cartSlice.reducer