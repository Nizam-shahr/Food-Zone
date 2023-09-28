import Header from "@/components/Header";
import OrderProduct from "@/components/OrderProduct";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import Modal from "react-modal";
import { useSelector } from "react-redux";
function Checkout() {
  const router = useRouter()
  const { items } = useSelector((state) => state.cart);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const cartTotal = items.reduce(
    (total, item) => (total += item.price * item.count),
    0
  );
  const deliveryFee = parseFloat(1200);
  const total = cartTotal + deliveryFee;
  const onSubmit = () => {
   try {
    
   } catch (error) {
    if (error) {
      router.push
    }
   }
  };
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "100",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#b14d4d 4px solid",
      borderRadius: "16px",
    },
  };
  function handleCheckout() {
    if (items.length !== 0) {
      setCheckoutModalOpen(true);
    } else {
      setCheckoutModalOpen(false);
      alert("No food selected, please check vendors page ");
      router.push('/Vendors')
    }
  }

  return (
    <div>
      <Header />

      <div className="checkoutContainer">
        <div className="checkoutHomeandVendors">
          <h2 className="home" onClick={() => router.push("/")}>
            Home
          </h2>{" "}
          <span> &gt; </span> <h2>Cart</h2>
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
                onSubmit={onSubmit}
              >
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email Address</label>
                <input type="email"></input>

              </form>
               <button  onClick={handleCheckout}>Submit</button>
              <Modal
                isOpen={checkoutModalOpen}
                onRequestClose={() => setCheckoutModalOpen(false)}
                style={modalStyle}
              >
                <div className="noCheckoutItem">
                  <h2>
                    This is just for trial .... we shall make it real soon
                  </h2>
                  <Spinner />
                </div>
              </Modal>
            </div>
          </div>
          <div className="cartProductContainer">
            <h2 className="pb-4">Order</h2>
            <div className="cartProduct">
              {items.length === 0 ? (
                <div className="noCheckoutItem ">
                  {" "}
                  <h2>No check out item</h2>
                  <img
                    className="h-60"
                    src="https://media1.giphy.com/media/jv6Jvd8nESAeM6WUNN/giphy.gif?cid=6c09b9525pus5i3lzvhihx02kg8id834ghe7gebr9d2i1x84&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                  ></img>
                </div>
              ) : (
                items.map((item) => (
                  <div>
                    <OrderProduct
                      id={item.id}
                      count={item.count}
                      itemAmount={item.price * item.count}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                ))
              )}
            </div>
            <div className="orderCartTotal">
              <h2> Delivery Fee: </h2>
              <h2>
                <span>
                  <PiCurrencyNgnDuotone />
                </span>
                {deliveryFee}
              </h2>
            </div>
            <div className="orderCartTotal">
              <h2> Subtotal: </h2>
              <h2>
                <span>
                  <PiCurrencyNgnDuotone />
                </span>
                {cartTotal}
              </h2>
            </div>
            <div className="orderCartTotal">
              <h2> Total: </h2>
              <h2>
                <span>
                  <PiCurrencyNgnDuotone />
                </span>
                {total}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
