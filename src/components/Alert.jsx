import { useContext } from "react";
import { ShopContent } from "../context";
import { useEffect } from "react";


export function Alert() {
    const {alertName: title, closeAlert} = useContext(ShopContent);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1000);

        return () => {
            clearTimeout(timerId)
        };
        //eslint-disable-next-line
    }, [title]);

    return (
    <div id="toast-container">
        <div className="toast">{title} added to Basket</div>
    </div>
    )
}