import {createSlice} from "@reduxjs/toolkit";
import {addLocalStorage, getLocalStorage} from "../../storage/localStorage";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            const product = action.payload;
            const existingProduct = state.find(p => p.id === product.id);
            if(existingProduct){
                existingProduct.count ++;
            } else {
                product.count = 1;
                state.push(product); //// pridedant nauja produkta i masyva
            }   //// payload - duomenys ateinantys i action
        },
        removeFromCart(state, {payload: id}){
            return state.filter(p => p.id !== id);
        }
    }
});

let prevCart = [];

//// issitrigina, kai kazkas pasikeicia
const subscribeToStore = (store) => {
    store.subscribe(() => {
        const cart = store.getState().cart;
        if(prevCart !== cart) {
            addLocalStorage('cart', cart);
            prevCart = cart;
        }
    })
}

const loadCartFromLocalStorage = () => getLocalStorage('cart') || [] ;

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;
export {subscribeToStore, loadCartFromLocalStorage}
