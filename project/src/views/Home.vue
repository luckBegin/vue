<template>
  <div class="home">
    <img src="../assets/sign.png" class='sign' @click = 'sign()'>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { service } from '@/service/service.js';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
    created : function(){
        let oid = window.location.href.match(/openid.*/g)[0].replace("openid=" , "")
        window.localStorage.oid = oid ;
    },
  methods : {
    sign(){
        this.$router.push('/flow') ;
    }
  }
}
</script>
<style scoped>
.home{
  width: 100% ; 
  height: 100% ;
  background: url('../assets/bg.png') round 
}
.sign{
  display: block;
  position: absolute;
  top: 53%;
  width: 36%;
  height: auto;
  left: 32%;
}
</style>