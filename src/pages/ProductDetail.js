import axios from "axios";
import { useEffect, useState } from "../utilities";


const ProductDetailPage = ({id}) => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
      // fetch("http://localhost:3000/products")
      // .then((Response)=>Response.json())
      // .then((data)=> setProducts(data))

      // viết gọn hơn của thằng fetch
      axios.get("http://localhost:3000/products").then(({data})=> setProducts(data))

    },[])
    const product=products.find((product)=> product.id === +id);
    if(!product) return null;
    return `<div>${product.name}</div>`
}

export default ProductDetailPage