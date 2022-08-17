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