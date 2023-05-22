import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import {render,router} from "./utilities/index.js";
import ProductsPage from "./pages/ProductPage.js";
import { ListPage } from "./pages/ListPage.js";
import NotFound from "./pages/NotFound.js";
import ProductDetailPage from "./pages/ProductDetail.js";
import AdminProductPage from "./pages/admin/Products.js";


const app=document.querySelector("#app");

router.on('/',()=>{render(HomePage,app)})
router.on('/AboutPage',()=>{render(AboutPage,app)})
router.on('/ProductPage',()=>{render(ProductsPage,app)})
router.on('/ProductPage/:id',({data})=>{render(() => ProductDetailPage(data),app)})
router.on('/ListPage',()=>{render(ListPage,app)})
router.notFound(()=>{render(NotFound,app)})
router.on('/admin/Products',()=>{render(AdminProductPage,app)})

router.resolve();
