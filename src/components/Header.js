import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import Register from "./Register";
import SignIn from "./SignIn";
import Image from "next/image";
function Header() {
  const router = useRouter();
  const { items } = useSelector((state) => state.cart);

  const auth = getAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "100",
    },
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#b14d4d 4px solid",
      borderRadius: "16px",
    },
  };
  const secondModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "100",
    },
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#b14d4d 4px solid",
      borderRadius: "16px",
    },
  };
  const handleSignUp = () => {
    setIsOpen(true);
  };
  const onLogOut = () => {
    auth.signOut();
    router.push('/')
    setLoggedIn(false);
    setIsLogoutOpen(false)
  };
  const clickCart = () => {
    if (loggedIn) {
      router.push("/Cart");
    } else {
      setIsModalOpen(true);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setLoggedIn(true);
      }
      console.log(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div onClick={() => router.push("/")} className="headerName">
          <h1>
            Food<span className="zone">Zone</span>
          </h1>
        </div>
        <div className="navBar">
          <div className="cart" onClick={clickCart}>
            <h2>Cart</h2>
            <AiOutlineShoppingCart className="shoppingCart" />
            {items.length !== 0 ? (
              <span className="cartLength">{items.length}</span>
            ) : (
              ""
            )}
          </div>
          <div>
            {" "}
            {loggedIn ? (
              <div>
              <button onClick={()=> setIsLogoutOpen(true)} className="logoutContainer">
                <Image src='/images/user.png' width={30} height={30} />
              </button>
              </div>
            ) : (
              <button className="SignIn" onClick={() => setIsModalOpen(true)}>
                Sign in
              </button>
            )}
             <Modal isOpen={isLogoutOpen} onRequestClose={() => setIsLogoutOpen(false)} style={modalStyle}>
                <div className="logout">
                  <h2  className="text-xl">Do you want to logout?</h2>
                  <div><button className="registerButton" onClick={onLogOut} >Yes</button> <button className="registerButton" onClick={()=>setIsLogoutOpen(false) } >No</button></div>
                </div>
              </Modal>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={modalStyle}
            >
              <SignIn
                setIsModalOpen={setIsModalOpen}
                setIsLogoutOpen={setIsLogoutOpen}
                isModalOpen={isModalOpen}
                loggedIn={loggedIn}
                handleSignUp={handleSignUp}
              />

              <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={secondModalStyle}
              >
                <Register
                  setIsOpen={setIsOpen}
                  setIsModalOpen={setIsModalOpen}
                setIsLogoutOpen={setIsLogoutOpen}
                  loggedIn={loggedIn}
                />

                <button className="closeModal" onClick={() => setIsOpen(false)}>
                  <span>X</span>
                </button>
              </Modal>
              <button
                className="closeModal"
                onClick={() => setIsModalOpen(false)}
              >
                <span>X</span>
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
