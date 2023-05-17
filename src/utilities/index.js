import Navigo from "navigo";

const router= new Navigo("/",{linksSelector:"a",hash:true});
const Render =(content,target)=>{
    target.innerHTML=content();
}
export  {Render,router};