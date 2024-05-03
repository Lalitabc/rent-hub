import { useContext } from "react";
import StoreContext from "../store/store";

const Item = ({item}) => {
    const { deleteFromcart } = useContext(StoreContext);
     

    return <div className="cart">
        <div className="infoCart">
            <img src={item.img} />
            <h3>{item.carName}</h3>

        </div>

        <div className="deleteCart">
            <span >{item.countItem}</span>
            <button onClick={e=> deleteFromcart(item.id)} className="btn btn-danger w-10 py-2" type="button">delete</button>
        </div>

    </div>

}

export default Item