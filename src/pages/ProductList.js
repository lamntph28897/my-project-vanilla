import { products } from "../data"

const ProductList = ({}) => {
return `
${products.map((products)=>{
    return`
        <div>
        <h2><a href="ProductPage/${products.id}">${products.title}</a></h2>
        <span>${products.cmt}</span>
        </div>`
}).join("")}
`
}

export default ProductList