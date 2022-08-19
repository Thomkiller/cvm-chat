<template>

    <div class="conteneur-complet">
        <div class="conteneur-chat">
            <h3>Chat</h3>
            <div v-for="(chat,index) in this.chatmsg" :key="index">
                {{chat.auteur}} : {{chat.msg}}
            </div>
        </div>
        <div class="conteneur-list">
             <h3>Membres actifs</h3>
            <div v-for="(memb,index) in this.guestlist" :key="index">  {{memb.membres}}</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chatmsg: [],
                guestlist: [],
            }
        },
        methods: {
            addchat: function (auteur, msg) {
                this.chatmsg.push({
                    auteur: auteur,
                    msg: msg
                })
                if(this.chatmsg.length == 20)
                this.chatmsg.length = 0
            },
            addguestlist: function (membreso) {
                this.guestlist.length = 0
                membreso.forEach(element => {
                    this.guestlist.push({
                        membres: element
                    })
                });

            }
        },



    }
</script>

<style scoped>
    h3 {
        color: red;

        font-family: Rockwell, Courier Bold, Courier, Georgia, Times, Times New Roman, serif;
        text-align: center;
    }

    .conteneur-complet{
        display: flex;
    }

    .conteneur-chat {
        color: red;
        background-color: black;
        width: 50%;
        margin-top: 50px;
        margin-left: 20px;
        border: red solid 5px;
        border-radius: 50px;
        padding: 13px;
        font-weight: bolder;
        font-family: Rockwell, Courier Bold, Courier, Georgia, Times, Times New Roman, serif;
        height: 580px;
        overflow: auto;
    }

    .conteneur-list{
         color: red;
        background-color: black;
        width: 50%;
        margin-top: 50px;
        margin-left: 20px;
        border: red solid 5px;
        border-radius: 50px;
        padding: 13px;
        font-weight: bolder;
        font-family: Rockwell, Courier Bold, Courier, Georgia, Times, Times New Roman, serif;
        height: 400px;
    }
</style>