import Header from '../components/Header'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function main() {

  const [selected, setSelected] = useState('0')
const [isGray, setIsGray] = useState(true)
const [ isDiabled, setIsDisabled] = useState(true)
const router = useRouter()

    const onChange =(e)=> {
    setSelected(e.target.value)
    setIsGray(false)

    }
    // const onClick =()=> {
    //   if (selected === 0) {
    //     setIsDisabled(false)
    //   } else {
    //     setIsDisabled(true)
        
    //   }
    // }
console.log(selected);
    const location = [
      'Abuja',
      'Keffi',
      'Nasarawa'
    ]
    console.log(selected);
   
  return (
    <div>
        <Header />
       <div>
       
       <h1 className='headerTitle'>
             Food <span className='zone'>Zone</span>
         </h1>
       <p className='headerP'>Anything food we got you covered</p>
       </div>
       <div className='inputDiv'>
        
         <form action='submit'  >   
         <h2 >Where are you ?</h2> 
         <select  name='location' onChange={onChange} value={selected} >
          <option value='0' className='option'>Select your address</option>
            {location.map((item, index) => (
             <option  key={index} value= {item} className='option'>{item}</option>
   )
   )}

             </select>
         </form>
       </div>
       <section className='w-full'>
       <h2 className='interestTitle'> Pick an interest</h2>
       <div className='interest'>
        
        <button onClick={()=>router.push('/Vendors')} disabled = {selected === '0' ? isDiabled : !isDiabled} className= {selected =='0' ? 'card filter grayscale' :'card filter grayscale-0' }>
       <img src='./images/fastFoodC.svg'  className='interestImage' alt='' />
         <h2 className= 'Nofilter' >Fast Food</h2>
         <p className='NofilterP'   >All sorrows are less with bread.</p>
        </button>
        <button onClick={() => router.push('/Vendors')} disabled = {selected === '0' ? isDiabled : !isDiabled} className= {selected =='0' ? 'card filter grayscale' :'card filter grayscale-0 cardHover' } >
        <img  src='./images/forkC.svg'  className='interestImage' alt='' />
        <h2 className='Nofilter' >Resturant</h2>
        <p className= 'NofilterP'>May not want it, but good for you.</p>
        </button>
       
        <button onClick={() => router.push('/Vendors')} disabled = {selected === '0' ? isDiabled : !isDiabled} className= {selected =='0' ? 'card filter grayscale ' :'card filter grayscale-0 cardHover' } >
        <img  src='./images/mai-thaiC.svg'   className='interestImage'  alt='' />
        <h2 className= 'Nofilter'>Drink And Cocktail </h2>
        <p className= 'NofilterP'>I feel sad for those who don't drink.</p>
        
        </button>
      <button onClick={() => router.push('/Vendors')} disabled = {selected === '0' ? isDiabled : !isDiabled} className= {selected =='0' ? 'card filter grayscale' :'card filter grayscale-0 cardHover' } >
        <img  src='./images/healthy-foodC.svg'  className='interestImage' alt='' />
        <h2  className= 'Nofilter'>Healthy Food</h2>
        <p className= 'NofilterP'>All sorrows are less with bread.</p>
        </button>
        </div>
      
       </section>
       <div className='borderLine'>
 
       </div>
       <section>
         <h2 className='headerTitle text-1.5'>How we serve you</h2>
         <div className="serveContainer">
          <div className='serveContainerDiv'>
         <div className="serve">
           <Image src= './images/Fastfood_two.svg' width={250} height={100} />
             <h2 className='text-center'>Tell us where you are</h2>
             <p className='filterP'>Select the location you want us to deliver.</p>
         </div>
         <div className="serve">
         <Image src= './images/Map_Two.svg'width={250} height={100}  />
       <h2 className='text-center'>Tell us what you want</h2>
 <p className='filterP'>Browse the type of food that interest you.</p>
         </div>
         <div className="serve">
         <Image src= './images/Scooter_Two.svg' width={250} height={100} />
         <h2 className='text-center'>We’ll come running.</h2>
         <p className='filterP'>Your order will be delivered to you in no time.</p>
         </div>
         </div>
         </div>
       </section>
       <div className='borderLine'>
 
       </div>
       <footer>
             <p className='footerTitle'>Contact Us</p>
             <div className='social'>
               <Image src='./images/twitter.svg'width="20" height="20" viewBox="0 0 20 20"   className='socailImage'/>
               <Image  src='./images/facebook.svg' width="15" height="20" viewBox="0 0 20 20" className='socailImage' />
               <Image  src='./images/youtube.svg' width="20" height="20" viewBox="0 0 20 20" className='socailImage' />
             </div>
             
             <div  className='footerPDiv'>
               <p>Terms & Conditions . Privacy Policy</p>
               <p>© Copyright 2021 FoodBag is a registered trademark</p>
             </div>
       </footer>
    </div>
  )
}

export default main
