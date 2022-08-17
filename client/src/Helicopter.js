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
