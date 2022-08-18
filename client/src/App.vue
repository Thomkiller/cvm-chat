

<template>
    <div>
        <h3>Chat</h3>
        <ul>
        <li v-for="(chat,index) in this.chatmsg" :key="index">
         {{chat}}
        </li>
        </ul>
    </div>

</template>

<script>

export default{
data(){
    return{
        chatmsg: [],
    }
},
methods:{
    addchat: function (auteur,msg) {
    this.chatmsg.push( {
        auteur : auteur,
        msg : msg
    })
console.log(auteur)
    }

},



}


</script>