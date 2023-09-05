import Header from "../components/Header";
import Image from "next/image";
import Dishes from "@/components/Dishes";
import { items } from "../components/data";
import { useRouter } from "next/navigation";
export default function Vendors() {
 
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="homeAndVendors">
      <h2 className="home" onClick={() => router.push('/')} >Home</h2>  <span> &gt; </span> <h2 >Vendors</h2>      </div>
      <div className="kfc">
        {items.map((item) => (
          <div>
            <div className="kfcTitle">
                <Image src={item.Logo} width={50} height={50}/>
                <h2> {item.title}</h2>
            </div>
            <div className="kfcCard">
              {item.dishes.map((dish, i) => (
                <Dishes key={i} dish={dish} />
              ))}
              </div>
          </div>
             
       
        ))}
      </div>
    </div>
  );
}
