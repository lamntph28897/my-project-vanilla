import { products } from "../../data"
import { useEffect } from "../../utilities"

const AdminProductPage = () => {
    useEffect(()=>{
        const btns=document.querySelectorAll(".btn-remove");
        console.log(btns)
    })
return (
    /*html*/`<div class="container" >
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
    <td  >${product.title}</td>
    <td>
      <button data-id="${product.id}" class="btn btn-danger btn-remove">Xoa</button>
    </td>
  </tr>
    `).join("")}
      
    </tbody>
  </table>
    </div>`
)
}

export default AdminProductPage