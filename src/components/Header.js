import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import Register from "./Register";
import SignIn from "./SignIn";
function Header() {
  const router = useRouter();
  const { items } = useSelector((state) => state.cart);
  const sumCount = items.reduce(
    (initialSum, item) => initialSum + item.count,
    0
  );
  const auth  = getAuth()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen]= useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex:'100',
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleSignUp  = ()=> {
    setIsOpen(true)
  } 
  const onLogOut = ()=> {
    auth.signOut()
    if (auth.signOut) {
      alert('logged out')
    } 
    setLoggedIn(false)
  }
  const clickCart = () => {
    if (loggedIn) {
      router.push('/Cart')
    }
  
  }
  useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data){
                setLoggedIn(true)
            }
            console.log(data);
        })
  }, [])

  return (
    <div className="container">
      <div className="header">
        <div onClick={() => router.push("/")} className="headerName">
          <h1>
            Food<span className="zone">Zone</span>
          </h1>
        </div>
        <div className="navBar">
          <div>
            <div className="cart"onClick={clickCart} >
              <h2>Cart</h2>
              <AiOutlineShoppingCart className="shoppingCart" />
              {items.length !== 0 ? (
                <span className="cartLength">{sumCount}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>  {loggedIn ?  <button onClick={onLogOut}>logout</button> : 
           <button className="SignIn" onClick={() => setIsModalOpen(true)}>
              Sign in
            </button> }
                 
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={modalStyle} >
                  <SignIn setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} loggedIn={loggedIn}/>
                  <button className="SignIn" onClick={handleSignUp} >
              Sign Up Instead
            </button> 
                 
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle} >
                  <Register setIsOpen={setIsOpen} setIsModalOpen={setIsModalOpen} loggedIn={loggedIn}/>
                  
                  <button  className="closeModal" onClick={()=> setIsOpen(false)} ><span>X</span></button>
               
            </Modal>
                  <button  className="closeModal" onClick={()=> setIsModalOpen(false)} ><span>X</span></button>
            </Modal>
          
          </div>
        
        </div>
      </div>
    </div>
  );
}
export default Header;
