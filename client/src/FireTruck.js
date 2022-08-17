class Firetruck {


    constructor(id){
        this.node = document.querySelector("#" + id)
        this.height = 890;
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