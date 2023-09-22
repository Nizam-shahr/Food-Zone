import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import { selectItems } from "../slices/cartSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Header from '@/components/Header'
import Image from "next/image";
import CartProduct from "@/components/CartProduct";

function Cart() {
 
  const checkout =() => {
      router.push('/Checkout')
    }

  
  const { items } = useSelector((state) => state.cart);
  const router = useRouter()
  const cartTotal = items.reduce(
    (total, item) => (total += item.price * item.count),
    0
  );
  return <div className="cartContainer">
     <Header  />
     <div className="cartHomeandVendors">
     <h2 className="home" onClick={() => router.push('/')} >Home</h2>  <span> &gt; </span> <h2 >Cart</h2>      
       </div>
       {items.length !== 0 ? <h1 className="cartName">Cart</h1> : ''  }
      
    { items.length ===0 ? <div className="emptyCart">
      <h1>  Your Cart Is Empty </h1>
       <img  src="https://media1.giphy.com/media/jv6Jvd8nESAeM6WUNN/giphy.gif?cid=6c09b9525pus5i3lzvhihx02kg8id834ghe7gebr9d2i1x84&ep=v1_stickers_related&rid=giphy.gif&ct=s"></img></div> : items.map((item)=> (
      <>
      <CartProduct 
          id ={item.id}
          count={item.count}
          itemAmount={item.price * item.count}
          name={item.name}
          price={item.price}
          image={item.image}      
      />
   
      </>
    ))
    
    }
    {items.length !== 0 ? <div className='cartTotal'>
        <h2> Total: <span><PiCurrencyNgnDuotone/></span>{cartTotal}</h2>
        <button disabled={items.length === 0}  onClick={checkout}> <h3> Checkout  </h3>
          <BsFillArrowRightCircleFill />
        </button>
       

     </div> : <div className='cartTotal'>
        <button disabled={items.length !== 0}  onClick={()=>router.push('/Vendors') }> 
        <BsFillArrowLeftCircleFill />
        <h3 className='noItem'> Go to Vendors  </h3>
        </button>
       

     </div>}
 
     
  
  </div>;
}

export default Cart;
