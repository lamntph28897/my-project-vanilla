import axios from "axios";
import Header from "../../components/header"
// import { products } from "../../data";
import { router, useEffect } from "../../utilities"

const AdminProductAddPage = () => {

    // const products=JSON.parse(localStorage.getItem('products'))|| [];  
    useEffect(()=>{
        const form=document.getElementById("form-add");
        const productName=document.getElementById("product-name");
        const productPrice=document.getElementById("product-price");

        form.addEventListener('submit',function(e){
            e.preventDefault();
            const newProduct={
                name:productName.value,
                price:productPrice.value,
            };
            // fetch("http://localhost:3000/products",{
            //     method:"POST",
            //     headers: {
            //         "Content-Type":"application/json",
            //     },
            //     body:JSON.stringify(newProduct)
            // }).then(()=>{
            //     router.navigate('/admin/Products') 
            // })
            axios.post("http://localhost:3000/products",newProduct)
            .then(()=>{
                router.navigate('/admin/Products') 
            })
            // thêm vào mảng
            // products.push(newProduct)

            //lưu lại storage
            // localStorage.setItem('products',JSON.stringify(products))

            //redirect sang admin
            
        })
    })

  return (
   /*html*/ `
   <div class="container max-w-4xl mx-auto px-4">
   ${Header()}
   <div class="container">
    <h1 class="fw-bold" >Them san pham</h1>
    <form action="" id="form-add">
        <div class="form-group mb-3">
            <label for=" ">ten san pham</label>
            <input type="text" id="product-name" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for=" ">gia san pham</label>
          <input type="text" id="product-price" class="form-control">
      </div>
      <div class="form-group">
          <button class="btn btn-primary" >Them san pham</button>
      </div>
    </form> </div></div>`
  )
}

export default AdminProductAddPage