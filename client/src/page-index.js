import {signin} from './chat-api';
import explosion from "./explosion.js"

console.log("lol")

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

   

});
// let Deadpool = document.getElementById("deadpool")
// console.log(Deadpool)
// Deadpool.addEventListener("click", () => {
//     let node = document.createElement("div")
//     let parentNode = document.querySelector("#background")
//     node.setAttribute("id", "msg")
//     node.innerText = "Welcome to Deadpool Chat"
//     parentNode.append(node);
//     })

const fire = () => {
    let node1 = document.createElement("div")
    node1.id.add("fire")
    let parentNode = document.querySelector("#background")
    parentNode.append(node1)
}



