import { Link } from "react-router-dom";
export default function ProductCard({ product }){
    return <div className="product-card" >
              <img className="product-card-image" src={product.image} alt={product.name} />
              <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">₹{product.price}</p>
                {/* <p>{product.description}</p> */}
                <Link className="btn btn-secondary btn-small">View Details</Link>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
               </div>
}