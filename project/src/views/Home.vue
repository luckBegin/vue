<template>
  <div class="home">
    <img src="../assets/sign.png" class='sign' @click = 'sign()'>
  </div>
  
</template>

<script>
// @ is an alias to /src

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
}
import HelloWorld from '@/components/HelloWorld.vue';
import { service } from '@/service/service.js';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
    created : function(){
        // let oid = GetUrlParam(openid) ;
        // window.localStorage.oid = oid ;
    },
  methods : {
    sign(){
        this.$router.replace('/flow') ;
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
  top: 64%;
  width: 56%;
  height: auto;
  left: 22%;
}
</style>
