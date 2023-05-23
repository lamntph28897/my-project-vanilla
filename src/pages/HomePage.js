import Header from "../components/header"
import { posts } from "../dataFake"

const HomePage=()=>{
    return `<div class="container max-w-4xl mx-auto px-4">
                ${Header()}
                <div>
                    <h1 class="font-bold " >Bai viet</h1>
                    <div class="grid grid-cols-3 gap-8">
                        ${posts.map(function map(post){
                            return `<div>
                                <h2>${post.title}</h2>
                                <p>${post.content}</p>
                            </div>`
                        }).join("")}
                    </div>
                </div>
            </div>`
}
export default HomePage 