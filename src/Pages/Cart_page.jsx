import LayOut from "./LayOut"
import { useAppContext } from "../context/AppContext/AppContext";
import Product from "../components/Product/Product";

function CartPage(){
    const{cartListState}=useAppContext()
   
    return(
     <LayOut hideFilter>
    < div className="grid-container" >
        {cartListState.map((product)=>(
        <Product
         key={product.id}
         image={product.image}
         title={product.title}
         rating={product.rating.rate}
         price={product.price}
         hideActions
         />
        
          ))}
           </div>
     </LayOut>
    )
}



export { CartPage}