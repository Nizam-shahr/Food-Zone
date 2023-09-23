import { useState } from 'react'
import { toast } from 'react-toastify'
import Modal from "react-modal";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Register from './Register';
import Spinner from './Spinner';
function SignIn({ setIsModalOpen, loggedIn}) {
  const [showPassword, setShowPassword] = useState(false)
  const[text, setText] = useState('Sign In')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

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

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      
      
      setIsModalOpen(false)
    } catch (error) {
      toast.error('Bad User Credentials')
      if (error) {
        setText('Sign in')
      }
    }
  }
  const handleText = () => {
    if (!loggedIn) {
      setText(() => {
        return <Spinner/>
      })
    }
    
   
  }

  return (
    <div className='registerContainer'>
      <div className="flex flex-col">
        <form onSubmit={onSubmit} className='register'>

          <label>Email</label>
          <input
            className="border border-gray-400 w-full h-[40px]"
            type="email"
            id='email'
            value={email}
            onChange={onChange}
          />

          <label>Password</label>
          <input
            className="border border-gray-400 w-full h-[40px] "
            type="password"
            id='password'
            value={password}
            onChange={onChange}
          />

          <button onClick={handleText}
            className="bg-blue-800 w-full p-3 registerButton"
          >{text}</button>
        </form>
      </div>
    
    </div>
 
  )
}

export default SignIn
