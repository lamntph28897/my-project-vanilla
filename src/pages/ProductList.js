import { products } from "../data"

const ProductList = ({}) => {
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