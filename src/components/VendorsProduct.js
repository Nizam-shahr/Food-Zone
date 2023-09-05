import Vendors from "@/pages/Vendors";
import { items } from "./data";

function VendorsProduct() {
  return (
    <div>
      {items.map((item) => (
        <Vendors logo={item.Logo} title={item.title} dishes={item.dishes} />
      ))}
    </div>
  );
}

export default VendorsProduct;
