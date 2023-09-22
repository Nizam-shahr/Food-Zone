import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function GoogleOauth() {
    
      const onGoogleClick = async () => {
        try {
          const auth = getAuth()
          const provider = new GoogleAuthProvider()
          const result = await signInWithPopup(auth, provider)
          const user = result.user
    
          // Check for user
          const docRef = doc(db, 'users', user.uid)
          const docSnap = await getDoc(docRef)
    
          // If user, doesn't exist, create user
          if (!docSnap.exists()) {
            await setDoc(doc(db, 'users', user.uid), {
              name: user.displayName,
              email: user.email,
              timestamp: serverTimestamp(),
            })
          }
        } catch (error) {
          toast.error('Could not authorize with Google')
        }
      }
    
      return (
        <div className='socialLogin'>
        Sign Up with 
          <button className='socialIconDiv' onClick={onGoogleClick}>
            <img className='socialIconImg' src={googleIcon} alt='google' />
          </button>
        </div>
      )
    }
    

export default GoogleOauth
