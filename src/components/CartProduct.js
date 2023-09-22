import Image from "next/image"
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete} from "react-icons/ai";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { increment, decrement, removeFromCart} from "../slices/cartSlice";
function CartProduct({id, price, name, image, count, itemAmount}) {
    const dispatch = useDispatch();
          const incrementItem=() => {
            dispatch(increment(id))
          }
          const decrementItem = ()=> {
              dispatch(decrement(id))
          }
      
         
  return (
    <div >
      
              <div className="checkout" > 
                  <div className="checkoutItem ">
        <img src={image} className="cartImage"  />
                      <div className="checkoutItemDetails">
                        <div>  <h2>{name}</h2> <h3><PiCurrencyNgnDuotone/>{price}</h3></div>
                    
                        <h2>Cost:<span><PiCurrencyNgnDuotone/></span>{itemAmount}</h2>
        </div>
      
        </div>
              <div className="addItem">
          
          <div className="incAndDecButton">
          <button onClick={decrementItem}> <AiOutlineMinus  className="deleteandAdd"/> </button>
          <span className="cartCount">{count}</span>
          <button onClick={incrementItem} ><AiOutlinePlus  className="deleteandAdd"/></button>  
          </div>
          <div>
            <button onClick={() => dispatch(removeFromCart({id}))}>
              <AiOutlineDelete size={40} className="deleteIcon"/>
            </button>
          </div>
        </div>  
        </div>
        <div className='borderLines'>
              </div>
        </div>
              
       
             
 
  )
}

export default CartProduct
