import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import {Render,router} from "./utilities/index.js";
import ProductsPage from "./pages/ProductPage.js";
import { ListPage } from "./pages/ListPage.js";
import NotFound from "./pages/NotFound.js";
import ProductDetailPage from "./pages/ProductDetail.js";

const app=document.querySelector("#app");

router.on('/',()=>{Render(HomePage,app)})
router.on('/AboutPage',()=>{Render(AboutPage,app)})
router.on('/ProductPage',()=>{Render(ProductsPage,app)})
router.on('/ProductPage/:id',({data})=>{Render(() => ProductDetailPage(data),app)})
router.on('/ListPage',()=>{Render(ListPage,app)})
router.notFound(()=>{Render(NotFound,app)})

router.resolve();
