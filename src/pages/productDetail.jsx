import {  useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useState,useEffect } from "react";
import { useCart } from "../context/cartContext";

export default function ProductDetail(){
    const {id}=useParams();
    const [product,setproduct] =useState(null);
    const navigate = useNavigate();
     const{addToCart,carItems}=useCart();
      
   useEffect(() => {
     const ProductFound = getProductById(id);
    if(!ProductFound){
        navigate("/")
        return;
    }
   setproduct(ProductFound)
     
   }, [id]);
   if(!product){
    return <h1>Loading...</h1>
   }
   const productInCart =carItems.find((items)=>items.id===product.id)
      const productQuantityLabel = productInCart ? `(${productInCart.quantity})`:"";

   
    return <div className="page"><div className="container"><div className="product-detail"><div className="product-detail-image">
        <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">₹{product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add To Cart {productQuantityLabel}</button>
            </div></div></div></div>
}