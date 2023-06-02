import axios from "axios"
import Header from "../../components/header"
import { router, useEffect, useState } from "../../utilities"

const AdminProductEditPage = ({id}) => {
    // const products=JSON.parse(localStorage.getItem('products'))|| [];
    // const currentProduct=products.find(product => product.id=== id);

    const[products,setProducts]=useState({})

    useEffect(()=>{
        // fetch(`http://localhost:3000/products/${id}`)
        // .then((Response)=>Response.json())
        // .then((data)=>{setProducts(data)})

        axios.get(`http://localhost:3000/products/${id}`).then(({data})=>setProducts(data))
    },[])
    useEffect(()=>{
        const form=document.getElementById("form-add");
        const productName=document.getElementById("product-name");
        const productPrice=document.getElementById("product-price");

        form.addEventListener('submit',function(e){
            e.preventDefault();
            const newProduct={
                id: id,
                name:productName.value,
                price:productPrice.value,
            };
            // fetch(`http://localhost:3000/products/${id}`,{
            //     method:"PUT",
            //     headers:{
            //         "Content-type":"application/json"
            //     },
            //     body:JSON.stringify(newProduct),
            // }).then(()=>{
            // //redirect sang admin
            // router.navigate('/admin/Products')
            // })
            axios.put(`http://localhost:3000/products/${id}`,newProduct)
            .then(()=>{
                //redirect sang admin
                router.navigate('/admin/Products')
                })
        })
    })
    if(!products) return null;
  return (
   /*html*/ `
   <div class="container max-w-4xl mx-auto px-4">
   ${Header()}
   <div class="container">
    <h1 class="fw-bold" >cap nhat san pham</h1>
    <form action="" id="form-add">
        <div class="form-group mb-3">
            <label for=" ">ten san pham</label>
            <input type="text" id="product-name" class="form-control" value="${products.name}">
        </div>
        <div class="form-group mb-3">
          <label for=" ">gia san pham</label>
          <input type="text" id="product-price" class="form-control" value="${products.price}">
      </div>
      <div class="form-group">
          <button class="btn btn-primary" >cap nhat san pham</button>
      </div>
    </form> </div></div>`
  )
}

export default AdminProductEditPage