import { products } from "../data";


const ProductDetailPage = ({id}) => {
    const product=products.find((product)=> product.id === +id);
    if(!product) return null;
    return `<div>${product.title}</div>`
}

export default ProductDetailPage