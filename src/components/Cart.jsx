import { useContext } from "react";
import { ShopContent } from "../context";

export function Cart() {
    const {order, handleBasketShow } = useContext(ShopContent);
    const quantity = order.length;
    return(
     <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
        <i className="material-icons">child_friendly</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
    );
}