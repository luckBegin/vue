<template>
  <div class="award">
    <div v-if='status === "wait" '>
      <img src="../assets/award/shake.png" alt="" style="width: 40%;">
      <p class="award_text">
        左手右手一个慢动作
      </p>
      <p class="award_text">
        摇一摇~~
      </p>
    </div>

    <div v-if='status === "start" '>
      <p class="award_text" style="font-size: 22px;font-weight: bolder;    margin-left: -5%;">
        倒计时
      </p>
      <p class="award_text" style="font-size: 130px;font-weight: bolder;    margin-left: -20%;">
        {{ text }}
      </p>
      <p class="award_text">
        准备好姿势~~
      </p>
    </div>

<!--     <button @click="mock()"> mock </button>
    <button @click="getRank()"> rank </button>
    <button @click="start()"> start </button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' ; 
import Shake from 'shake.js'; 
export default {
  name: 'award',
  components: {
    HelloWorld
  },
  data(){
    return {
      ws : null , 
      info : { "name" : "1", "id" : "3" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } , 
      status : "wait" , 
      text : ""
    }
  },
  created(){
    this.websocket() ;
    window.vue = this ;
  },
  mounted () {
    let myShakeEvent = new Shake({
        threshold: 12, 
        timeout: 450
    });
    myShakeEvent.start();
    window.addEventListener('shake', this.shakeEventDidOccur, false);
  },
  methods: {
      websocket () {
          let ws = new WebSocket('ws://localhost:3000') ;
          
          ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
          }
          ws.onmessage = msg => {
            var message = JSON.parse(msg.data) ; 

            if(message.action === 'start'){
              this.$data.status = 'start';
              this.$data.text = message.time ;
            };

            if(message.action === 'end'){
              this.$data.status = 'wait'
              this.$data.text = message.time ;
            };
            console.log(message) ;
          }
          ws.onclose = function () {
              console.log('连接已关闭...')
          };
          this.$data.ws = ws ;
          // this.send({"type" : "save"  , 'info' : { "name" : "1" , "id" : "1" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "2" , "id" : "2" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "3" , "id" : "3" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "4" , "id" : "4" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "5" , "id" : "5" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "6" , "id" : "6" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "7" , "id" : "7" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "8" , "id" : "8" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "9" , "id" : "9" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "10" , "id" : "10" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "11" , "id" : "11" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
          // this.send({"type" : "save"  , 'info' : { "name" : "12" , "id" : "12" , img : 'http://tx.haiqq.com/uploads/allimg/150325/122H254S-1.jpg' } })
      },
      send( data ){
        if (this.$data.ws.readyState===1) {
            this.$data.ws.send(JSON.stringify(data));
        }else{
          var _this = this; 
          setTimeout(function(){
            _this.send(data) ;
          } , 100)
        }
      },
      shakeEventDidOccur () {
        this.send({type :"shake" , 'info' : this.$data.info })
      },
      mock(){
        this.send({type :"shake" , 'info' : this.$data.info })
      },
      getRank(){
        this.send({type:'getRank'})
      },
      start(){
        this.send({type:'start' , 'info' : { time : 10 , award : 20 } })
      }
  },  
  beforeDestroy () {
      this.$data.ws.close() ;
  }
}
// 
</script>
<style scoped >
.award{
  width: 100% ; 
  height: 100% ;
  display: flex ; 
  flex-direction: column ; 
  justify-content: center ;
  align-items: center ; 
  overflow: hidden;
  background: url('../assets/award/award.png') round  ; 
}
.award_text{
    color: #e4c98d;
    margin-top: 20px;
    text-align: center;
}
</style>