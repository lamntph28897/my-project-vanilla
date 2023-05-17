import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import {Render,router} from "./utilities/index.js";
import ProductPage from "./pages/ProductPage.js";
import { ListPage } from "./pages/ListPage.js";
import NotFound from "./pages/NotFound.js";

const app=document.querySelector("#app");

router.on('/',()=>{Render(HomePage,app)})
router.on('/AboutPage',()=>{Render(AboutPage,app)})
router.on('/ProductPage',()=>{Render(ProductPage,app)})
router.on('/ListPage',()=>{Render(ListPage,app)})
router.notFound(()=>{Render(NotFound,app)})

router.resolve();
