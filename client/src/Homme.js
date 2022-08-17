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