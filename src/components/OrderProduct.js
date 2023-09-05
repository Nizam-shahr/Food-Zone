import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { increment, decrement, removeFromCart } from "../slices/cartSlice";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
function OrderProduct({ id, price, name, image, count, itemAmount }) {

  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(increment(id));
  };
  const decrementItem = () => {
    dispatch(decrement(id));
  };
 
  return (
    <div className="orderImageAndBtnConatainer">
    
      <div className="orderImageAndBtn ">
        <div className="orderImageContainer">
      <Image src={image} width={120} height={100} />
       
            <div className="orderDetailsContainer">
              <div>
             <h2>{name}</h2>
              <h3><PiCurrencyNgnDuotone/>{price}</h3>
              </div> 
              <div>
              <h2  className="itemAmount">Cost:<span><PiCurrencyNgnDuotone/></span>{itemAmount}</h2>
              </div>
      </div>
      </div>
      <div className="orderIncandDecContainer">
      <div className="orderIncandDec">
          
          <div className="orderIncandDecBtn">
          <button onClick={decrementItem}> <AiOutlineMinus size={17} /> </button>
          <span className="orderCount">{count}</span>
          <button onClick={incrementItem} ><AiOutlinePlus size={17} /></button>  
          </div>
          <div className="orderDelete">
            <button onClick={() => dispatch(removeFromCart({id}))}>
              <AiOutlineDelete size={20} className=""/>
            </button>
          </div>
        </div>  
        </div>
        </div>
       
      </div>

  );
}

export default OrderProduct;
