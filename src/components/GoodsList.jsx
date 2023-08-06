import { useContext } from "react";
import { ShopContent } from "../context";

import { GoodsItem } from "./GoodsItem";

export function GoodsList() {
    const {goods = []} = useContext(ShopContent);

    if(!goods.length) {
       return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem  key={item.id} {...item} />
        ))}
    </div>

}