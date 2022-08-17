import {
    getTransitionRawChildren
} from 'vue';
import {
    register
} from './chat-api';

let spritelisthomme = [];
let compteur = 0

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }

    let node = document.createElement("div")
    node.innerText = "Nombre d'homme invisible trouvé : " + compteur
    node.setAttribute("id","texte")
    let parentNode = document.querySelector("#background")
    parentNode.append(node);

    console.log(node)

    document.querySelector("#div-invisible").addEventListener("mouseover", () => {

        const createElement = () => {
            let node = document.createElement("div")
            let parentNode = document.querySelector("#background")
            node.setAttribute("class", "homme")
            node.innerText = "Trouver les hommes invisibles dans la pièce et \n cliquer pour les faire courir"
            parentNode.append(node);

        }
        setTimeout(createElement, 500)


    })

    document.querySelector("#div-invisible").addEventListener("mouseout", () => {

        const removeElement = () => {
            let node = document.querySelector(".homme")
            node.remove();
        }

        setTimeout(removeElement, 2000)

    })

    for (let i = 0; i < 6; i++) {
        let sprite = new Homme("homme-invisible-" + i)
        spritelisthomme.push(sprite)
        spritelisthomme[i].createHomme(i);

    }

    changeOpacity();

    document.querySelector("#homme-invisible-0").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme();

    })

    document.querySelector("#homme-invisible-1").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme1();

    })

    document.querySelector("#homme-invisible-2").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme2();

    })

    document.querySelector("#homme-invisible-3").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme3();

    })

    document.querySelector("#homme-invisible-4").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme4();

    })

    document.querySelector("#homme-invisible-5").addEventListener("click", () => {
        compteur++;
        document.querySelector("#texte").innerText = "Nombre d'homme invisible trouvé : " + compteur
        moveHomme5();

    })
})

const changeOpacity = () => {
    for (let i = 0; i < spritelisthomme.length; i++) {
        spritelisthomme[i].opacityChange();

    }
    window.requestAnimationFrame(changeOpacity)

}

const moveHomme = () => {
    spritelisthomme[0].move("homme-invisible-0")
    window.requestAnimationFrame(moveHomme)
}

const moveHomme1 = () => {
    spritelisthomme[1].moveb("homme-invisible-1")
    window.requestAnimationFrame(moveHomme1)
}

const moveHomme2 = () => {
    spritelisthomme[2].movec("homme-invisible-2")
    window.requestAnimationFrame(moveHomme2)
}

const moveHomme3 = () => {
    spritelisthomme[3].move("homme-invisible-3")
    window.requestAnimationFrame(moveHomme3)
}

const moveHomme4 = () => {
    spritelisthomme[4].moveb("homme-invisible-4")
    window.requestAnimationFrame(moveHomme4)
}

const moveHomme5 = () => {
    spritelisthomme[5].movec("homme-invisible-5")
    window.requestAnimationFrame(moveHomme5)
}


class Homme {

    constructor(id) {
        this.node = document.querySelector("#" + id)
        this.height = 200
        this.distancex = (Math.random() * 900) + 500
        this.opacity = 0
        this.speed = 0.0025
        this.negativespeed = -0.8
        this.distancey = (Math.random() * 800)


    }

    createHomme(val) {
        let node = document.createElement("img")
        node.src = "/client/img/homme-invisible.png"
        node.setAttribute("id", "homme-invisible-" + val)
        let parentNode = document.querySelector("#background")
        parentNode.append(node)
        node.style.top = this.distancey + "px"
        node.style.left = this.distancex + "px"
        node.style.opacity = this.opacity
        node.style.height = this.height + "px"

    }

    opacityChange() {

        if (this.opacity < 1) {
            this.opacity += this.speed
            let node = document.querySelector("#homme-invisible-0")
            let node1 = document.querySelector("#homme-invisible-1")
            let node2 = document.querySelector("#homme-invisible-2")
            let node3 = document.querySelector("#homme-invisible-3")
            let node4 = document.querySelector("#homme-invisible-4")
            let node5 = document.querySelector("#homme-invisible-5")

            node.style.opacity = this.opacity;
            node1.style.opacity = this.opacity;
            node2.style.opacity = this.opacity;
            node3.style.opacity = this.opacity;
            node4.style.opacity = this.opacity;
            node5.style.opacity = this.opacity;
        } else if (this.opacity > 0.6) {
            this.opacity += this.negativespeed
            let node = document.querySelector("#homme-invisible-0")
            let node1 = document.querySelector("#homme-invisible-1")
            let node2 = document.querySelector("#homme-invisible-2")
            let node3 = document.querySelector("#homme-invisible-3")
            let node4 = document.querySelector("#homme-invisible-4")
            let node5 = document.querySelector("#homme-invisible-5")
            node.style.opacity = this.opacity;
            node1.style.opacity = this.opacity;
            node2.style.opacity = this.opacity;
            node3.style.opacity = this.opacity;
            node4.style.opacity = this.opacity;
            node5.style.opacity = this.opacity;

        }



    }

    move(id) {
        let node = document.querySelector("#" + id)
        let movexspeed = Math.random() * 4
        let moveyspeed = Math.random() * 4
        this.distancey += moveyspeed
        this.distancex += movexspeed
        node.style.top = this.distancey + "px"
        node.style.left = this.distancex + "px"
    }


    moveb(id) {
        let node = document.querySelector("#" + id)
        let movexspeed = Math.random() * 4
        let moveyspeed = Math.random() * 4
        this.distancey -= moveyspeed
        this.distancex += movexspeed
        node.style.top = this.distancey + "px"
        node.style.left = this.distancex + "px"
    }

    movec(id){
        let node = document.querySelector("#" + id)
        let movexspeed = Math.random() * 4
        let moveyspeed = Math.random() * 4
        this.distancey -= moveyspeed
        this.distancex -= movexspeed
        node.style.top = this.distancey + "px"
        node.style.left = this.distancex + "px"
    }
}