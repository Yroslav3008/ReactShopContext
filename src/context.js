import { createContext, useReducer } from "react";
import { reducer } from "./rducer";

export const ShopContent = createContext();
const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}
export const ContextProvaider = ({children}) => {
    const [ value, dispatch] = useReducer(reducer, initialState);
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BACKET_SHOP', payload: {id: itemId}})
    }
    value.handleBasketShow = () => {
        dispatch({type: 'HANDLEBASKETSHOW'})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    value.addQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY',  payload: {id: itemId}})
    }
    value.removeQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }
    return <ShopContent.Provider value={value}>
        {children}
    </ShopContent.Provider>
}