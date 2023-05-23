
import Header from "../../components/header";
import { products } from "../../data"
import { useEffect, useState } from "../../utilities"

const AdminProductPage = () => {
    const [data,setData]=useState(products);

    useEffect(()=>{
        const btns=document.querySelectorAll(".btn-remove");
        for (let btn of btns){
          btn.addEventListener("click",function(){
            const id=this.dataset.id;
            const newProducts=data.filter((product)=>product.id!== +id);
            console.log(newProducts)
            setData(newProducts)
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
    ${data.map((product,index)=>`
    <tr>
    <td> ${index+1} </td>
    <td  >${product.name}</td>
    <td>
      <button data-id="${product.id}" class="btn btn-danger btn-remove">Xoa</button>
    </td>
  </tr>
    `).join("")}
      
    </tbody>
  </table>
    </div></div>`
)
}

export default AdminProductPage