
import Header from "../../components/header";
import { useEffect, useState } from "../../utilities"
import axios from "axios";

const AdminProductPage = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      // fetch("http://localhost:3000/products")
      // .then((Response)=>Response.json())
      // .then((data)=> setProducts(data))

      // viết gọn hơn của thằng fetch
      axios.get("http://localhost:3000/products").then(({data})=> setProducts(data))

    },[])

    useEffect(()=>{
        const btns=document.querySelectorAll(".btn-remove");
        for (let btn of btns){
          btn.addEventListener("click",function(){
            const id=this.dataset.id;
            axios.delete(`http://localhost:3000/products/${id}`)
            .then(()=>{
              setProducts(products.filter((product) => product.id != id))
          })
          //   fetch(`${"http://localhost:3000/products"}/${id}`,{
          //     method:"DELETE",
          // })
          // .then(()=>{
          //     setProducts(products.filter((product) => product.id != id))
          // })
          // .then(()=>{
          //     console.log(products.filter((product) => product.id != id))
          // })
          })
        }
    })

return (
    /*html*/`
    <div class="container max-w-4xl mx-auto px-4">
    ${Header()}
    <div class="container" >
    <table class="table table-boredered">
    <thead>
      <tr>
        <th>stt</th>
        <th>ten</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
    ${products.map((product,index)=>`
    <tr>
    <td> ${index+1} </td>
    <td  >${product.name}</td>
    <td>
      <button data-id="${product.id}" class="btn btn-danger btn-remove">Xoa</button>
      <a href="/admin/Products/${product.id}/edit">sua</a>
    </td>
  </tr>
    `).join("")}
      
    </tbody>
  </table>
    </div></div>`
)
}

export default AdminProductPage