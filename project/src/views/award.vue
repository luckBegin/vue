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

function GetUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    }
    else {
        return "";
    }
};

var heartCheck = {
    timeout: 30000,        //9分钟发一次心跳
    timeoutObj: null,
    serverTimeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    },
    start: function(){
        var self = this;
        this.timeoutObj = setTimeout(function(){
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            ws.send(JSON.stringify({type:"ping"}));
            console.log("ping!")
            self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
                ws.close();     //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            }, self.timeout)
        }, this.timeout)
    }
}
export default {
  name: 'award',
  components: {
    HelloWorld
  },
  data(){
    return {
      ws : null , 
      info : {}  ,
      status : "wait" , 
      text : ""
    }
  },
  created(){
    let oid = GetUrlParam("openid") ;
    window.localStorage.oid = oid ;
    this.websocket() ;
    this.$data.info = { "id" : oid } ;
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
          let ws = new WebSocket('ws://jichang.yoopoon.com/websocket') ;
          heartCheck.reset().start();      //心跳检测重置
          ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
          }
          ws.onmessage = msg => {


            heartCheck.reset().start();
            var message = JSON.parse(msg.data) ;
              var text = message.time; ;

              if(parseInt(message.time) >= 22 )
                  text = '预备' ;
              if(parseInt(message.time) === 21 )
                  text = '开始';

            if(message.action === 'start'){
              this.$data.status = 'start';
              this.$data.text = text
            };

            if(message.action === 'end'){
              this.$data.status = 'wait'
              this.$data.text = text;
            };
            console.log(message) ;
          }
          ws.onclose = function () {
              console.log('连接已关闭...')
          };
          this.$data.ws = ws ;
          // this.send({"type" : "save"  , 'info' : this.$data.info })
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