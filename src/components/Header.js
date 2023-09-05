'use client'
import React, { use } from 'react'
import { useSelector } from 'react-redux'
import{signIn, signOut, useSession} from 'next-auth/react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from 'next/navigation'
function Main() {
  const router = useRouter()
  const {items}  = useSelector((state) => state.cart);
  const sumCount = items.reduce((initialSum, item) => initialSum + item.count, 0)
  const {data: session} = useSession()
const clickCart = (() => {
   if (session) {
   router.push('/Cart')
  } else {
    signIn()
  }
})
 
  return (
    <div className='container'>
      <div className='header'>
        <div onClick={() => router.push('/')} className='headerName'>
          <h1>
            Food<span className='zone'>Zone</span>
          </h1>
         
        </div>
        <div className='navBar'>
          <div >
          <div className='cart' onClick={clickCart}>
            <h2>Cart</h2>
             < AiOutlineShoppingCart className='shoppingCart'/>
            {items.length !==0 ? <span className='cartLength'>{sumCount}</span>
            : ''
            }
            
          </div>
              </div>
            <div className='SignIn'  onClick={!session ? signIn : signOut}>           
            <a className={session ? 'logIn' : 'loggedIn'} href=''> {session ? `Hello ${session.user.name}` : 'Sign In'}</a>
            </div>
            <div  onClick={!session? signIn : signOut}> 
            <a className={!session ? 'signUp': 'signedUp'} href=''> {session ? `Hello ${session.user.name}` : 'Sign Up'}</a>
            </div>
        </div>
      </div>
     
    </div>
  )

  }
  export default Main
