import axios from "axios";
import { useEffect, useState } from "../utilities";

const ProductList = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      // fetch("http://localhost:3000/products")
      // .then((Response)=>Response.json())
      // .then((data)=> setProducts(data))

      // viết gọn hơn của thằng fetch
      axios.get("http://localhost:3000/products").then(({data})=> setProducts(data))

    },[])
return `
${products.map((products)=>{
    return`
        <div>
        <h2><a href="ProductPage/${products.id}">${products.name}</a></h2>
        <span>${products.price}</span>
        </div>`
}).join("")}
`
}

export default ProductList