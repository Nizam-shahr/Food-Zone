import { useState } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { signIn, signOut, useSession } from "next-auth/react";
import Spinner from "./Spinner";

function Register({ setIsModalOpen, loggedIn, setIsOpen }) {
  const { data: session } = useSession();
  const[text, setText] = useState('Register')
  const [insteadText, setInsteadText] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      setIsModalOpen(false)
    } catch (error) {
      if (error) {
        setText('Register')
        setInsteadText('Already have an account? Sign In')
      }
      toast.error("Something went wrong with registration or user already exist");
    }
  };
  const handleText = () => {
    if (!loggedIn) {
      setText(() => {
        return <Spinner/>
      })
    }
    
   
  }
  return (
    <div className="registerContainer">
      
      <div className="flex flex-col">
        <form onSubmit={onSubmit} className="register">
          <label>Name</label>
          <input
            className="border border-gray-400 w-full h-[40px] "
            type="name"
            id="name"
            value={name}
            onChange={onChange}
          />

          <label>Email</label>
          <input
            className="border border-gray-400 w-full h-[40px]"
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <label>Password</label>
          <input
            className="border border-gray-400 w-full h-[40px] "
            type="password"
            id="password"
            value={password}
            onChange={onChange}
          />

          <button onClick={handleText} className="bg-blue-800 w-full p-3 registerButton">{text} </button>
        </form>
      </div>
      <div className="instead">
        <button onClick={()=>  setIsOpen(false)}>{insteadText}</button>
           </div>
    </div>
  );
}

export default Register;
