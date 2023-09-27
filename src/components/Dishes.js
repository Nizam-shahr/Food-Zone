import { addToCart, removeFromCart } from "../slices/cartSlice";
import Cart from "../pages/Cart";
import { useDispatch, useSelector } from "react-redux"
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import Image from "next/image";
function Dishes({ dish: { price, name, id, image } }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const item = { price, image, name, id };
    dispatch(addToCart(item));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromCart(product))
  }
  const { items } = useSelector((state) => state.cart);
  const product = items.find((item) => item.id === id);
  return (
<div className="kfcCards">
      <div className="kfcCardItem ">
        <Image src={image} width={250} height={250} className="kfcImage" />
        <div className="kfcPrice">
          <h2>{name}</h2>
          <h3><PiCurrencyNgnDuotone/>{price}</h3>
        </div>
        {product ? <button onClick={removeItemFromBasket} >Remove </button> : <button onClick={addItemToBasket}>Add to cart </button> }
        
      </div>
    </div>
  );
}

export default Dishes;
