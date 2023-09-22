import Header from "@/components/Header";
import OrderProduct from "@/components/OrderProduct";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const cartTotal = items.reduce(
    (total, item) => (total += item.price * item.count),
    0
  );
  const deliveryFee = parseFloat(1200);
  const total = cartTotal + deliveryFee
  const onSubmit = () => {

  };
  return (
    <div>
      <Header />
      
      <div className="checkoutContainer">
      <div className="checkoutHomeandVendors">
     <h2 className="home" onClick={() => router.push('/')} >Home</h2>  <span> &gt; </span> <h2 >Cart</h2>      
       </div>
       <h1 className="cartNames">Checkout</h1>
        <div className="checkoutContainerDiv">

          <div className="deliveryDetails">
            <div>
              <div className="verification">
                <h1>Verification</h1>
                <h2>Confirm address and Payment</h2>
              </div>
              <div className="delivery">
                <h1> Delivery Address</h1>
                <h2>Your payment would be delivered to your address</h2>
              </div>
            </div>

            <div className="checkoutDetails">
              <form
                className="checkoutForm"
                action="submit"
                onSubmit={onSubmit}
              >
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email Address</label>
                <input type="email"></input>
              </form>
            </div>
          </div>
         <div className="cartProductContainer">
         <h2 className="pb-4">Order</h2>
          <div className="cartProduct">
        
           {items.map((item) => (
            <div >
            <OrderProduct
            id ={item.id}
            count={item.count}
            itemAmount={item.price * item.count}
            name={item.name}
            price={item.price}
            image={item.image} 
            />
  
  </div>
          
          ))}
         
           </div>
           <div className="orderCartTotal">
           <h2> Delivery Fee: </h2> 
           <h2><span><PiCurrencyNgnDuotone/></span>{deliveryFee}</h2></div>
           <div className="orderCartTotal">
           <h2> Subtotal: </h2> 
           <h2><span><PiCurrencyNgnDuotone/></span>{cartTotal}</h2></div>
           <div className="orderCartTotal">
           <h2> Total: </h2> 
           <h2><span><PiCurrencyNgnDuotone/></span>{total}</h2></div>
           </div>
           
       
        </div>
      </div>
    </div>
  );
}

export default Checkout;
