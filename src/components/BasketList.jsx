import { useContext } from "react";
import { ShopContent } from "../context";
import { BasketItem } from "./BasketItem";

export function BasketList() {
  const { order = [], handleBasketShow} = useContext(ShopContent);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Busket
      </li>    
    {
      order.length ? (order.map(item =>  (
        <BasketItem
         key={item.id}
         {...item}
         />
      ))) : (<li className="collection-item">No item in Basket</li>)
    } 
      <li className="collection-item active" >
        Total: {totalPrice}grn
        
      </li>
      <li className="collection-item " >
        <button className="btn btn-small">Oformit</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
}
