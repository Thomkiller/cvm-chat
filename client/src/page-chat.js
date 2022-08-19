import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import {createApp, createElementBlock, normalizeClass} from 'vue'
import App from "../src/App.vue"
let root
window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();
 const app = createApp(App)
 root = app.mount("#vue-container")

document.querySelector("#texte-chat").addEventListener("focus", () => {
let randomizer = Math.random()*40
if(randomizer <= 10){
    let node = document.createElement("div")
node.setAttribute("id", "deadpooljoke")
node.innerText="dubstep is so great"
let parentNode = document.querySelector(".background-chat")
parentNode.prepend(node)
}
else if(randomizer > 10 && randomizer <= 20){
let node = document.createElement("div")
node.setAttribute("id", "deadpooljoke")
node.innerText="Wolverine is such a great friend"
let parentNode = document.querySelector(".background-chat")
parentNode.prepend(node)
}
else if(randomizer > 20 && randomizer <= 30){
    let node = document.createElement("div")
node.setAttribute("id", "deadpooljoke")
node.innerText="The unicorns are the human best friend"
let parentNode = document.querySelector(".background-chat")
parentNode.prepend(node)
}
})

document.querySelector("#texte-chat").addEventListener("blur", () => {
let node = document.querySelector("#deadpooljoke")
node.remove()

})

})



// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
   console.log(fromUser, message, isPrivate)
   root.addchat(fromUser,message);

}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    console.log(members);
    root.addguestlist(members)
}

