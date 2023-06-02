import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import {render,router} from "./utilities/index.js";
import ProductsPage from "./pages/ProductPage.js";
import NotFound from "./pages/NotFound.js";
import ProductDetailPage from "./pages/ProductDetail.js";
import AdminProductPage from "./pages/admin/Products.js";
import AdminProductAddPage from "./pages/admin/ProductAdd.js";
import AdminProductEditPage from "./pages/admin/ProductEdit.js";


const app=document.querySelector("#app");

router.on('/',()=>{render(HomePage,app)})
router.on('/AboutPage',()=>{render(AboutPage,app)})
router.on('/ProductPage',()=>{render(ProductsPage,app)})
router.on('/ProductPage/:id',({data})=>{render(() => ProductDetailPage(data),app)})
router.notFound(()=>{render(NotFound,app)})
router.on('/admin/Products',()=>{render(AdminProductPage,app)})
router.on('/admin/Products/add',()=>{render(AdminProductAddPage,app)})
router.on('/admin/Products/:id/edit',({data})=>{render(() => AdminProductEditPage(data),app)})

router.resolve();
