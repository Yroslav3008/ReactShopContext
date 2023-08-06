import { useEffect, useContext } from "react";
import { API_URL } from "../config";

import { ShopContent } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

export function Shop() {
  const {loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContent);


  useEffect(function getGoods() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList />
      )}
      {isBasketShow && <BasketList/>}
    {
      alertName && <Alert />
    }
    </main>
  );
}
