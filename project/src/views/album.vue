<template>
  <div class="metting">
    <div class="scroll-content">
      <div class="zq-waterfall">
            <div class="zq-waterfall-item">
                <div class="box">
                    <img src="../assets/flow/1.png" alt="">
                </div>
            </div>
            <div class="zq-waterfall-item">
                <div class="box">
                    <img src="../assets/flow/album.png" alt="">
                </div>
            </div>
            <div class="zq-waterfall-item">
                <div class="box">
                    <img src="../assets/flow/1.png" alt="">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' ; 
export default {
  name: 'metting',
  components: {
    HelloWorld
  },
  methods : {
  }
}
</script>
<style scoped >
.metting{
  width: 100% ; 
  height: 100% ;
  background: url('../assets/flow/album.png') round  ; 
  display: flex ; 
  flex-direction: column ; 
  justify-content: center ;
  align-items: center ; 
  overflow: hidden;
}
.scroll-content{
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.zq-waterfall{
    padding: 35% 0 0 0;
    width: 100%;
}
.box{
    margin-bottom: 0.333rem;
}
.box>img{
        width: 100%;
        border-radius: 0.133rem;
        display: block;
}
.zq-waterfall-item{
    width: calc(50% - 8px) ;
    background-color: #ccc;
    box-sizing: border-box;
    margin: 4px;
}
.zq-waterfall-item:nth-child(odd) {
  float: left ;
}
.zq-waterfall-item:nth-child(even) {
  float: right ;
}
</style>