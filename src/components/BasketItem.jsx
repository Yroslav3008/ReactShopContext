import { useContext } from "react";
import { ShopContent } from "../context";

export function BasketItem(props) {
    const {id, title, price, quantity} = props;
    const { removeFromBasket, addQuantity, removeQuantity } = useContext(ShopContent);
    return <li className="collection-item">
        {title} x{quantity} = {price * quantity}grn
        <button className="addGood good" onClick={() => addQuantity(id)}>+</button>
        <button className="removeGood good" onClick={() => removeQuantity(id)}>-</button>
        <span className="secondary-content" onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete">delete</i>
        </span>
            </li>


}