import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import cartReducer, {loadCartFromLocalStorage} from "./slice/cartSlice";
import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from "./slice/userSlice";
import cart, {subscribeToStore} from "./slice/cartSlice";


const reducers = combineReducers({
    cart: cartReducer
});

// const buildStore = () => {
//     //// cia tam , kad vektu Redux componentai Chrome
//     const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
//     return createStore(reducers,
//         undefined,
//         composeEnhancers(applyMiddleware(createLogger())));
// }

const buildStore = () => {
    const store = configureStore({
        reducer:{
            cart, user
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        preLoadedState: {
            cart: loadCartFromLocalStorage()
        }
    });

    subscribeToStore(store);

    return store;

}

const store = buildStore();

export default store;