 
import StoreContext from "../store/store";
import { useContext } from "react";
import Item from "./Item";

const Cart = () => {
    const { data } = useContext(StoreContext);
     

    return (
        <div className="cartContainer">
            {data.length === 0 ? (
                <h1 className="emptycart">Cart is Empty 🚗</h1>
            ) : (
                data.map((e) => <Item key={e.id} item={e} />)
            )}
        </div>
    );
};

export default Cart;
