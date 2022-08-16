import {
    signin
} from './chat-api';
let spritelist = [];
let spritelistheli = [];
let spritelisttruck = [];
let clicks = 0
console.log("lol")

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

});

window.addEventListener("click", () => {
    let sprite = new Fire("fire");
    spritelist.push(sprite)
    spritelist[clicks].fire();
    clicks++;

    if (clicks == 5) {
        let helico = new Helicopter("helico");
        spritelistheli.push(helico)
        spritelistheli[0].helicopter()
        bougerHeli();
    }

    if(clicks == 2){
        let truck = new Firetruck("firetruck")
        spritelisttruck.push(truck)
        spritelisttruck[0].fireTruck();
        bougerTruck();
        

    }


})

const bougerHeli = () => {
    spritelistheli[0].move();
    window.requestAnimationFrame(bougerHeli);
}

const bougerTruck = () => {
    spritelisttruck[0].moveTruck()
    window.requestAnimationFrame(bougerTruck)

}




class Fire {

    constructor(id) {
        this.node = document.querySelector("#" + id);
        this.height = ((Math.random() * 250) + 600);
        this.distance = (Math.random() * 1800);
        this.size = (Math.random() * 50)


    }
    fire() {
        let node1 = document.createElement("img")
        node1.src = "/client/img/Explosion.png"
        node1.setAttribute("id", "fire")
        let parentNode = document.querySelector("#background")
        parentNode.append(node1)
        node1.style.top = this.height + "px"
        node1.style.left = this.distance + "px"
        node1.style.height = ((Math.random() * 70) + 40) + "px"
        console.log(node1.style.top)

    }
}

class Helicopter {

    constructor(id) {
        this.node = document.querySelector("#" + id)
        this.height = 100;
        this.distance = 1750;
        this.speed = 1;
    }

    helicopter() {
        let node = document.createElement("img")
        node.src = "/client/img/helico2.gif"
        node.setAttribute("id", "helico")
        let parentNode = document.querySelector("#background")
        parentNode.append(node)
        node.style.top = this.height + "px"
        node.style.left = this.distance + "px"

    }

    move() {
        this.distance -= this.speed
        let node = document.querySelector("#helico")
        node.style.left = this.distance + "px"


        if (this.distance == 0) {
            this.distance = 1750;
            this.height = (Math.random() * 150)
            let node1 = document.querySelector("#helico")
            node1.style.top = this.height + "px"

        }

    }


}

class Firetruck {


    constructor(id){
        this.node = document.querySelector("#" + id)
        this.height = 820;
        this.distance = 1750;
        this.speed = 2;
    }

    fireTruck(){
        let node = document.createElement("img")
        node.src = "/client/img/fireTruck2.png"
        node.setAttribute("id", "firetruck")
        let parentNode = document.querySelector("#background")
        parentNode.append(node)
        node.style.top = this.height + "px"
        node.style.left = this.distance + "px"
    }

    moveTruck(){
        this.distance -= this.speed
        let node = document.querySelector("#firetruck")
        node.style.left = this.distance + "px"

        if(this.distance == 200){
            this.speed = 0
        }
        

    }
}