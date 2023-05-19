import Header from "../components/header"
import { products } from "../data"
import ProductList from "./ProductList"

const ProductsPage = () => {
    return `<div class="container max-w-4xl mx-auto px-4">
    ${Header()}
                <div class="grid grid-cols-3 gap-8 ">
                    ${ProductList({products})}
                </div>
            </div>`
}

export default ProductsPage
