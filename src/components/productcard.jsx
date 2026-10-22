import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
export default function ProductCard({ product }){
  const{addToCart,carItems}=useCart();
  const productInCart =carItems.find((items)=>items.id===product.id)
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})`:"";
    return <div className="product-card" >
              <img className="product-card-image" src={product.image} alt={product.name} />
              <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">₹{product.price}</p>
                {/* <p>{product.description}</p> */}
                <Link to={`/products/${product.id}`} className="btn btn-secondary btn-small">View Details</Link>
                <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart {productQuantityLabel}</button>
              </div>
               </div>
}